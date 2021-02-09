import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {DataContext} from "../../../dataContext.js"

import "./style.css"

function Categories(props) {

  const {categories, addCategoryFilter} = useContext(DataContext)

  return (
    <div className="categories-section-container content">
      <h1 id="categories-section-title">Categories</h1>
      <div id="categories-container">
        {categories.map(category => {
          return (
            <Link to="/search" key={category.id} className="category-card" onClick={() => addCategoryFilter(category)}>
              <img src={category.image} alt="category" />
              <h2>{category.name}</h2>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
