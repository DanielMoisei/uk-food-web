import React from "react"
import "./style.css"
import newsBannerWide from "./Resources/newsBannerWide.jpg"

function NewsBanner() {
  return (
    <div className="news-banner content">
      <img src={newsBannerWide} alt="random" />
    </div>
  )
}

export default NewsBanner
