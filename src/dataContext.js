import React, {useState, useEffect} from "react"
import Firebase from "./Firebase.js"

const DataContext = React.createContext()

function DataContextProvider(props) {

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

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

  const addCategoryFilter = (category) => setCategoryFilterIDs(prevFilter => prevFilter.concat(category.id))
  const removeCategoryFilter = (category) => setCategoryFilterIDs(categoryFilterIDs.filter(id => id !== category.id))

  const addProducerFilter = (producer) => setProducerFilterIDs(prevFilter => prevFilter.concat(producer.id))
  const removeProducerFilter = (producer) => setProducerFilterIDs(producerFilterIDs.filter(id => id !== producer.id))

  useEffect(() => {
    let newProducts = allProducts
    newProducts = producerFilterIDs.length ? newProducts.filter(product => producerFilterIDs.includes(product.producerId)) : newProducts
    newProducts = categoryFilterIDs.length ? newProducts.filter(product => categoryFilterIDs.includes(product.categoryId)) : newProducts
    newProducts = nameFilter !== "" ? newProducts.filter(product => product.name.toLowerCase().match(nameFilter.toLowerCase())) : newProducts
    newProducts = priceRange.min !== "" && priceRange.max !== "" ? newProducts.filter(product => parseInt(priceRange.min) <= product.price && product.price <= parseInt(priceRange.max)) : newProducts
    newProducts = priceRange.min !== "" ? newProducts.filter(product => parseInt(priceRange.min) <= product.price) : newProducts
    newProducts = priceRange.max !== "" ? newProducts.filter(product => product.price <= parseInt(priceRange.max)) : newProducts

    setFilteredProducts(newProducts)
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
        isSidebarExpanded, setIsSidebarExpanded, 
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
