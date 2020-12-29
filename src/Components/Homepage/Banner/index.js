import React from "react"
import "./style.css"
import bannerImage from "./Resources/bannerImage.png"
import logoLarge from "./Resources/logoLarge.png"

function Banner() {
  return (
    <div id="banner-container" class="content">
      <div id="banner-content">
        <img id="banner-logo" src={logoLarge} />
        <p class="banner-text">We're your portal to craft and artisan producers.</p>
        <p class="banner-text">Proudly connecting Producers with Consumers and Businesses, home and abroad.</p>
        <p id="learn-more-banner-button">Learn more</p>
      </div>
      <img id="banner-image" src={bannerImage} />
    </div>
  )
}

export default Banner
