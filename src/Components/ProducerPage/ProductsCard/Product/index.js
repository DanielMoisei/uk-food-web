import React from "react"
import "./style.css"

function Product(props) {
  return (
    <div id="product">
      <div id="product-header" style={{background: `url(${props.product.images[0]})`, backgroundSize: "cover"}}>
          <h3 id="product-price">£{props.product.price}</h3>
      </div>
      <h3 id="product-name">{props.product.name}</h3>
    </div>
  )
}

export default Product
