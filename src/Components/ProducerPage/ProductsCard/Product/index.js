import React from "react"
import {Link} from "react-router-dom"

import "./style.css"

function Product(props) {

  const product = props.product

  return (
    <Link id="product" to={"/product/" + product.name}>
      <div id="product-header" style={{background: `url(${product.images[0]})`, backgroundSize: "cover"}}>
        <h3 id="product-price">£{product.price}</h3>
      </div>
      <h3 id="product-name">{product.name}</h3>
    </Link>

  )
}

export default Product
