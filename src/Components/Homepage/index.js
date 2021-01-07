import React, {useState, useEffect} from "react"
import Firebase from "../../Firebase.js"
import "./style.css"
import Banner from "./Banner"
import NewsCards from "./NewsCards"
import NewsBanner from "./NewsBanner"
import Categories from "./Categories"
import FeaturedProducers from "./FeaturedProducers"
import FeaturedProducts from "./FeaturedProducts"

function Homepage(props) {

  return (
    <div>
      <Banner />
      <NewsCards />
      <NewsBanner />
      <Categories
        categories={props.categories} setCategories={props.setCategories}
      />
      <FeaturedProducts
        allProducts={props.allProducts} setAllProducts={props.setAllProducts}
      />
      <NewsBanner />
      <FeaturedProducers
        allProducers={props.allProducers} setAllProducers={props.setAllProducers}
        relProducts={props.relProducts} setRelProducts={props.setRelProducts}
        focusProducer={props.focusProducer} setFocusProducer={props.setFocusProducer}
      />
    </div>
  )
}

export default Homepage
