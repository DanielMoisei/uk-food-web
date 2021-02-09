import React, {useState, useEffect} from "react"
import Firebase from "./Firebase.js"

const DataContext = React.createContext()

function DataContextProvider(props) {

  // GENERAL DATA STATE
  const [allProducts, setAllProducts] = useState([])
  const [allProducers, setAllProducers] = useState([])
  const [categories, setCategories] = useState([])

  const [relProducts, setRelProducts] = useState([])
  const [relProducer, setRelProducer] = useState()

  const [productCategories, setProductCategories] = useState([])
  const [producerCategories, setProducerCategories] = useState([])

  useEffect(() => {
    Firebase.updateState("Categories", setCategories)
    Firebase.updateState("Products", setAllProducts)
    Firebase.updateState("Producers", setAllProducers)
  }, [])

  // SEARCH PAGE FILTER STATE
  const [nameFilter, setNameFilter] = useState("")

  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [categoryFilterIDs, setCategoryFilterIDs] = useState([])
  const [producerFilterIDs, setProducerFilterIDs] = useState([])
  const [priceRange, setPriceRange] = useState({min: "", max: ""})

  const addCategoryFilter = (category) => {
    if(producerFilterIDs.length > 0) {
      return null
    } else {
      setCategoryFilterIDs(prevFilter => prevFilter.concat(category.id))
    }
  }

  const removeCategoryFilter = (category) => {
    setCategoryFilterIDs(categoryFilterIDs.filter(id => id !== category.id))
  }

  const addProducerFilter = (producer) => {
    if(categoryFilterIDs.length > 0) {
      return null
    } else {
      setProducerFilterIDs(prevFilter => prevFilter.concat(producer.id))
    }
  }

  const removeProducerFilter = (producer) => {
    setProducerFilterIDs(producerFilterIDs.filter(id => id !== producer.id))
  }

  const filterProducerNormal = () => setFilteredProducts(producerFilterIDs.length ? allProducts.filter(product => producerFilterIDs.includes(product.producerId)) : allProducts)
  const filterCategoryNormal = () => setFilteredProducts(categoryFilterIDs.length ? allProducts.filter(product => categoryFilterIDs.includes(product.categoryId)) : allProducts)
  const filterNameNormal = () => setFilteredProducts(allProducts.filter(product => product.name.toLowerCase().match(nameFilter.toLowerCase())))

  const filterProducerMulti = () => setFilteredProducts(prevProducts => producerFilterIDs.length ? prevProducts.filter(product => producerFilterIDs.includes(product.producerId)) : prevProducts)
  const filterCategoryMulti = () => setFilteredProducts(prevProducts => categoryFilterIDs.length ? prevProducts.filter(product => categoryFilterIDs.includes(product.categoryId)) : prevProducts)
  const filterNameMulti = () => setFilteredProducts(prevProducts => prevProducts.filter(product => product.name.toLowerCase().match(nameFilter.toLowerCase())))

  const filterPriceNormal = () => {
    if (priceRange.min !== "" && priceRange.max !== "") {
      setFilteredProducts(allProducts.filter(product => parseInt(priceRange.min) <= product.price && product.price <= parseInt(priceRange.max)))
    } else if (priceRange.min !== "") {
      setFilteredProducts(allProducts.filter(product => parseInt(priceRange.min) <= product.price))
    } else if (priceRange.max !== "") {
      setFilteredProducts(allProducts.filter(product => product.price <= parseInt(priceRange.max)))
    } else if (priceRange.max === "" && priceRange.min === "") {
      setFilteredProducts(allProducts)
    }
  }

  const filterPriceMulti = () => {
    if (priceRange.min !== "" && priceRange.max !== "") {
      setFilteredProducts(prevProducts => prevProducts.filter(product => parseInt(priceRange.min) <= product.price && product.price <= parseInt(priceRange.max)))
    } else if (priceRange.min !== "") {
      setFilteredProducts(prevProducts => prevProducts.filter(product => parseInt(priceRange.min) <= product.price))
    } else if (priceRange.max !== "") {
      setFilteredProducts(prevProducts => prevProducts.filter(product => product.price <= parseInt(priceRange.max)))
    }
  }

  useEffect(() => {
    if (producerFilterIDs.length > 0 || categoryFilterIDs.length > 0 || nameFilter !== "") {
      filterProducerMulti()
      filterCategoryMulti()
      filterNameMulti()
      filterPriceMulti()
    } else {
      filterProducerNormal()
      filterCategoryNormal()
      filterNameNormal()
      filterPriceNormal()
    }
  }, [producerFilterIDs, categoryFilterIDs, priceRange, nameFilter])

  const handlePriceChange = (e) => {
    const {name, value} = e.target
    setPriceRange(prevRange => ({
      ...prevRange,
      [name]: value
    }))
  }

  return (
    <DataContext.Provider
      value={{
        allProducts, setAllProducts,
        allProducers, setAllProducers,
        categories, setCategories,
        relProducts, setRelProducts,
        relProducer, setRelProducer,
        productCategories, setProductCategories,
        producerCategories, setProducerCategories,
        nameFilter, setNameFilter,
        filteredProducts, setFilteredProducts,
        categoryFilterIDs, setCategoryFilterIDs,
        producerFilterIDs, setProducerFilterIDs,
        priceRange, setPriceRange,
        addProducerFilter, removeProducerFilter,
        addCategoryFilter, removeCategoryFilter,
        handlePriceChange
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export {DataContextProvider, DataContext}
