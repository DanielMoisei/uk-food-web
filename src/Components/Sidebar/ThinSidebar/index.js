import React, {useState} from "react"
import {Link} from "react-router-dom"

import "./style.css"

function ThinSidebar() {

  const [searchIcon, setSearchIcon] = useState("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIconWhite_jii0ue.png")
  const [leaveIcon, setLeaveIcon] = useState("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/leaveIconWhite_tnfagx.svg")

  return (
    <div id="thin-sidebar">

      <Link to="/">
        <img id="thin-sidebar-logo" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/logoSmall_avk9lj.png" alt="logo" />
      </Link>

      <Link to="/search">
        <div
          id="thin-sidebar-search-square"
          onMouseEnter={() => setSearchIcon("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIconNavy_yxp5ju.png")}
          onMouseLeave={() => setSearchIcon("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIconWhite_jii0ue.png")}
        >
          <img id="thin-sidebar-search" src={searchIcon} alt="search" />
        </div>
      </Link>

    </div>
  )
}

export default ThinSidebar
