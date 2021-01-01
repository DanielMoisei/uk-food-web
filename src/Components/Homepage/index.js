import React from "react"
import "./style.css"
import Banner from "./Banner"
import NewsCards from "./NewsCards"
import NewsBanner from "./NewsBanner"

function Homepage() {
  return (
    <div>
      <Banner />
      <NewsCards />
      <NewsBanner />
    </div>
  )
}

export default Homepage
