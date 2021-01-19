import React, {useState, useEffect} from "react"
import Firebase from "./Firebase.js"

const DataContext = React.createContext()

function DataContextProvider(props) {
  const [allProducts, setAllProducts] = useState([])
  const [allProducers, setAllProducers] = useState([])
  const [categories, setCategories] = useState([])

  const [relProducts, setRelProducts] = useState([])
  const [productCategories, setProductCategories] = useState([])
  const [producerCategories, setProducerCategories] = useState([])

  const [focusProducer, setFocusProducer] = useState()

  useEffect(() => {
    Firebase.updateState("Categories", setCategories);
    Firebase.updateState("Products", setAllProducts);
    Firebase.updateState("Producers", setAllProducers);
  }, [])

  return (
    <DataContext.Provider
      value={{
        allProducts, setAllProducts,
        allProducers, setAllProducers,
        categories, setCategories,
        relProducts, setRelProducts,
        productCategories, setProductCategories,
        producerCategories, setProducerCategories,
        focusProducer, setFocusProducer}}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export {DataContextProvider, DataContext}