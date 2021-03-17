import React from "react"

import "./style.css"

function Banner() {
  return (
    <div id="banner-container" className="content">
      <div id="banner-content">
        <img
          id="banner-logo"
          src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/logoLarge_jf5mhb.png"
          alt="logo"
        />
        <p className="banner-text">We're your portal to craft and artisan producers.</p>
        <p className="banner-text">Proudly connecting Producers with Consumers and Businesses, home and abroad.</p>
        <a href="https://ukfoodweb.info" target="_blank"><button id="learn-more-banner-button">Learn more</button></a>
      </div>
      <img
        id="banner-image"
        src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802153/UKFoodWeb/Homepage_Misc/bannerImage_ihxijb.png"
        alt="food"
      />
    </div>
  )
}

export default Banner
