import React, {useEffect, useContext} from "react"

import {DataContext} from "../../dataContext.js"

import ProductCard from "./ProductCard"

import "./style.css"

function SearchPage() {

  const {categories, allProducers, allProducts} = useContext(DataContext)

  const {
    filteredProducts, setFilteredProducts,
    categoryFilterIDs, setCategoryFilterIDs,
    producerFilterIDs, setProducerFilterIDs,
    addProducerFilter, removeProducerFilter,
    addCategoryFilter, removeCategoryFilter,
    handlePriceChange,
    setNameFilter, setPriceRange
  } = useContext(DataContext)

  useEffect(() => {
    categoryFilterIDs.length > 0 && allProducts.length > 0 ?
    setFilteredProducts(allProducts.filter(product => categoryFilterIDs.includes(product.categoryId))) :
    setFilteredProducts(allProducts)
    return () => {
      setProducerFilterIDs([])
      setCategoryFilterIDs([])
      setNameFilter("")
      setPriceRange({min: "", max: ""})
    }
  }, [])


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
              onBlur={handlePriceChange}
              placeholder="min"
            />
            -
            <input
              type="number"
              className="price-field"
              name="max"
              onBlur={handlePriceChange}
              placeholder="max"
            />
          </div>
        </div>

        <div id="category-filter">
          <div className="filter-title">
            <h3>Category</h3>
            <button className="expand-button" onClick={() => producerFilterIDs.length > 0 ? null : setCategoryFilterIDs([])}>Clear</button>
          </div>
          <hr />
          {categories.map(category =>
            <p
              style={categoryFilterIDs.includes(category.id) ? {color: "#a0e000", fontWeight: 600} : {color: "#000000"}}
              key={category.id}
              className="filter-choice"
              onClick={() => categoryFilterIDs.includes(category.id) ? removeCategoryFilter(category) : addCategoryFilter(category)}
            >{category.name}</p>)}
        </div>

        <div id="producer-filter">
          <div className="filter-title">
            <h3>Producer</h3>
            <button className="expand-button" onClick={() => categoryFilterIDs.length > 0 ? null : setProducerFilterIDs([])}>Clear</button>
          </div>
          <hr />
          {allProducers.map(producer =>
            <p
              style={producerFilterIDs.includes(producer.id) ? {color: "#a0e000", fontWeight: 600} : {color: "#000000"}}
              key={producer.id}
              className="filter-choice"
              onClick={() => producerFilterIDs.includes(producer.id) ? removeProducerFilter(producer) : addProducerFilter(producer)}
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
