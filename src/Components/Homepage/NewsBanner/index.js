import React from "react"

import newsBannerWide from "./Resources/newsBannerWide.jpg"

import "./style.css"

function NewsBanner() {
  return (
    <div className="news-banner content">
      <img src={newsBannerWide} alt="random" />
    </div>
  )
}

export default NewsBanner
