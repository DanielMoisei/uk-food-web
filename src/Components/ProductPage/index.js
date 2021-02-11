import React, {useEffect, useContext} from "react"
import {useParams, useHistory} from "react-router-dom"

import Firebase from "../../Firebase.js"
import {DataContext} from "../../dataContext.js"

import NameCard from "./NameCard"

import backArrow from "./Resources/backArrow.svg"

import "./style.css"

function ProductPage(props) {

  const {allProducts, relProducer, setRelProducer} = useContext(DataContext)

  const history = useHistory()
  const {productName} = useParams()
  const thisProduct = allProducts.find(product => product.name === productName)

  useEffect(() => {
    Firebase.findProducerForProduct(thisProduct.id, setRelProducer)
    return () => {
      setRelProducer()
    }
  }, [])

  return (
    <div id="product-page">
      {
        relProducer ?
        <button id="back-button" onClick={() => history.goBack()}>
          <img src={backArrow} alt=""/>
        </button> : null
      }
      {relProducer ? <NameCard thisProduct={thisProduct} /> : null}
    </div>
  )
}

export default ProductPage
