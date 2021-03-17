import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"

import {DataContext} from "../../../dataContext.js"

import "./style.css"

function WideSidebar(props) {

  const {setIsSidebarExpanded, isSidebarExpanded} = useContext(DataContext)
  const [searchIcon, setSearchIcon] = useState("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIconWhite_jii0ue.png")
  const [leaveIcon, setLeaveIcon] = useState("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/leaveIconWhite_tnfagx.svg")

  return (
    <>
      <div id={isSidebarExpanded ? "wide-overlay-active" : "wide-overlay-hidden"} onClick={() => setIsSidebarExpanded(false)}>
      </div>

      <div id= {isSidebarExpanded ? "wide-sidebar-active" : "wide-sidebar-hidden"}>

        <Link to="/" onClick={() => setIsSidebarExpanded(false)}>
          <img id="wide-sidebar-logo" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/logoLarge_jf5mhb.png" alt="logo" />
        </Link>

        <Link to="/search">
          <div
            id="wide-sidebar-search"
            onClick={() => setIsSidebarExpanded(false)}
            onMouseEnter={() => setSearchIcon("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIconNavy_yxp5ju.png")}
            onMouseLeave={() => setSearchIcon("https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIconWhite_jii0ue.png")}
          >
            <div id="wide-search-content">
              <img id="wide-sidebar-search-icon" src={searchIcon} alt="search" />
              <h3 id="wide-search-text">Search products</h3>
            </div>
          </div>
        </Link>

      </div>
    </>
  )
}

export default WideSidebar
