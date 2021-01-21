import React, {useEffect, useContext} from "react"
import NameCard from "./NameCard"
import Product from "./Product"
import {DataContext} from "../../dataContext.js"
import "./style.css"

function ProducerPage(props) {

  const {relProducts, setRelProducts, setFocusProducer} = useContext(DataContext)

  useEffect(() => {
    return () => {
      setRelProducts([]);
      setFocusProducer();
    }
  }, [])

  return (
    <div id="producer-page">
      <NameCard />
      {relProducts.map(product => <Product productName={product.name} price={product.price} />)}
    </div>
  )
}

export default ProducerPage
