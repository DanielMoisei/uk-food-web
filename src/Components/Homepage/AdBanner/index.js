import React from "react"
import "./style.css"
import adBannerWide from "./Resources/adBannerWide.jpg"

function AdBanner() {
  return (
    <div className="ad-banner content">
      <img src={adBannerWide} />
    </div>
  )
}

export default AdBanner
