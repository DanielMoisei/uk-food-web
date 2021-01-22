import React, {useContext} from "react"
import Product from "./Product"
import {DataContext} from "../../../dataContext.js"
import "./style.css"
import rightArrow from "./Resources/rightArrow.svg"

function ProductsCard(props) {

  const {relProducts} = useContext(DataContext)

  return (
    <div id="products-card">
      <div id="products-card-header">
        <h2 id="products-card-title">Products</h2>
        <div id="filters">
          <div id="dropdown-div">
            <h3>Filters</h3>
            <img id="dropdown-arrow" src={rightArrow} alt="" />
          </div>
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
