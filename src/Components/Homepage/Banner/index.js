import React from "react"

import bannerImage from "./Resources/bannerImage.png"
import logoLarge from "./Resources/logoLarge.png"

import "./style.css"

function Banner() {
  return (
    <div id="banner-container" className="content">
      <div id="banner-content">
        <img id="banner-logo" src={logoLarge} alt="logo" />
        <p className="banner-text">We're your portal to craft and artisan producers.</p>
        <p className="banner-text">Proudly connecting Producers with Consumers and Businesses, home and abroad.</p>
        <a href="https://ukfoodweb.info" target="_blank"><button id="learn-more-banner-button">Learn more</button></a>
      </div>
      <img id="banner-image" src={bannerImage} alt="food" />
    </div>
  )
}

export default Banner
