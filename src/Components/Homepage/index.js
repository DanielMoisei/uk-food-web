import React from "react"

import Banner from "./Banner"
import NewsCards from "./NewsCards"
import NewsBanner from "./NewsBanner"
import Categories from "./Categories"
import FeaturedProducers from "./FeaturedProducers"
import FeaturedProducts from "./FeaturedProducts"

import "./style.css"

function Homepage(props) {

  return (
    <div>
      <Banner />
      <NewsCards />
      <NewsBanner />
      <Categories />
      <FeaturedProducts />
      <NewsBanner />
      <FeaturedProducers />
    </div>
  )
}

export default Homepage
