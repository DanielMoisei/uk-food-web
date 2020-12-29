import React from "react"
import "./style.css"
import Banner from "./Banner"
import NewsCards from "./NewsCards"
import AdBanner from "./AdBanner"

function Homepage() {
  return (
    <div>
      <Banner />
      <NewsCards />
      <AdBanner />
    </div>
  )
}

export default Homepage
