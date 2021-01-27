import React, {useContext} from "react"

import {DataContext} from "../../../dataContext.js"

import "./style.css"

function Categories(props) {

  const {categories} = useContext(DataContext)

  return (
    <div className="categories-section-container content">
      <h1 id="categories-section-title">Categories</h1>
      <div id="categories-container">
        {categories.map(category => {
          return (
          <div key={category.id} className="category-card">
            <img src={category.image} alt="category" />
            <h2>{category.name}</h2>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
