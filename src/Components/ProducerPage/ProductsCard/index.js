import React, {useContext} from "react"

import {DataContext} from "../../../dataContext.js"

import Product from "./Product"

import "./style.css"

function ProductsCard(props) {

  const {relProducts} = useContext(DataContext)

  return (
    <div id="products-card">
      <div id="products-card-header">
        <h2 id="products-card-title">Products</h2>
        <div id="filters">
          <button id="dropdown-button">
            <h3>Filters</h3>
            <img id="dropdown-arrow" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802155/UKFoodWeb/Homepage_Misc/rightArrow_gdczqb.svg" alt="" />
          </button>
          <button id="clear-button">Clear filters</button>
        </div>
      </div>

      <div id="products">
        {relProducts.map(product => <Product key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default ProductsCard
