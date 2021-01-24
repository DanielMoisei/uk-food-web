import React, {useContext} from "react"
import {Link} from "react-router-dom"
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
        {relProducts.map(product => <Link to={"/product/" + product.name}> <Product key={product.id} product={product} /> </Link>)}
      </div>
    </div>
  )
}

export default ProductsCard
