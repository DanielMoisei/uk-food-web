import React, {useEffect, useContext} from "react"
import {useParams} from "react-router-dom"

import Firebase from "../../Firebase.js"
import {DataContext} from "../../dataContext.js"

import NameCard from "./NameCard"

import "./style.css"

function ProductPage(props) {

  const {allProducts, relProducer, setRelProducer} = useContext(DataContext)

  const {productName} = useParams()
  const thisProduct = allProducts.find(product => product.name === productName)

  useEffect(() => {
    Firebase.findProducerForProduct(thisProduct.id, setRelProducer);
    return () => {
      setRelProducer();
    }
  }, [])

  return (
    <div id="product-page">
      {relProducer && <NameCard thisProduct={thisProduct} />}
    </div>
  )
}

export default ProductPage
