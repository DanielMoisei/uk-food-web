import React, {useState, useEffect} from "react"
import Firebase from "../../../Firebase.js"
import "./style.css"

function Categories(props) {

  useEffect(() => {
    Firebase.updateState("Categories", props.setCategories)
  }, [])

  return (
    <div className="categories-section-container content">
      <h1 id="categories-section-title">Categories</h1>
      <div id="categories-container">
        {props.categories.map(category => {
          return (
          <div className="category-card">
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
