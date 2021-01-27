import React, {useState, useContext} from "react"

import Firebase from "../../Firebase.js"
import {DataContext} from "../../dataContext.js"

import ProductCard from "./ProductCard"

import "./style.css"

function SearchPage() {

  const {categories, allProducers, allProducts} = useContext(DataContext)

  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [priceRange, setPriceRange] = useState({min: "", max: ""})
  const [producerFilter, setProducerFilter] = useState()

  const handleProducerFilter = (producer) => {
    setProducerFilter(producer.name)
    setFilteredProducts([])
    Firebase.updateStateWithProducts(producer.id, setFilteredProducts)
  }

  const resetProducerFilter = () => {
    setProducerFilter()
    setFilteredProducts(allProducts)
  }

  const handlePriceChange = (e) => {
    const {name, value} = e.target
    setPriceRange(prevRange => ({
      ...prevRange,
      [name]: value
    }))
  }

  return (
    <div id="search-page">
      <div id="filter-bar">

        <div id="price-filter">
          <h3 id="price-title">Price range</h3>
          <div id="price-input">
            <input
              type="number"
              className="price-field"
              name="min"
              value={priceRange.min}
              onChange={handlePriceChange}
              placeholder="min"
            />
            -
            <input
              type="number"
              className="price-field"
              name="max"
              value={priceRange.max}
              onChange={handlePriceChange}
              placeholder="max"
            />
          </div>
        </div>

        <div id="category-filter">
          <div className="filter-title">
            <h3>Category</h3>
            <button className="expand-button">Show all</button>
          </div>
          <hr />
          {categories.map(category => <p key={category.id} className="filter-choice">{category.name}</p>)}
        </div>

        <div id="producer-filter">
          <div className="filter-title">
            <h3>Producer</h3>
            <button className="expand-button">Show all</button>
          </div>
          <hr />
          {allProducers.map(producer =>
            <p
              style={producerFilter === producer.name ? {color: "#a0e000"} : {color: "#000000"}}
              key={producer.id}
              className="filter-choice"
              onClick={() => producerFilter ? resetProducerFilter() : handleProducerFilter(producer)}
            >{producer.name}</p>)}
        </div>

      </div>

      <div id="products-area">
        {filteredProducts.length ? filteredProducts.map(product => <ProductCard key={product.id} product={product} />) : null}
      </div>

    </div>
  )
}

export default SearchPage
