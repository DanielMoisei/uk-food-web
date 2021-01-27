import React from "react"
import {Link} from "react-router-dom"

import "./style.css"

function ProductCard(props) {

  const product = props.product

  return (
      <Link className="product-card" to={`/product/${product.name}`}>
        <img className="product-img" src={product.images[0]} alt="" />
        <h3 className="product-detail">{product.name}</h3>
      </Link>
  )
}

export default ProductCard
