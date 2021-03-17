import React, {useContext} from "react"

import {DataContext} from "../../dataContext.js"

import "./style.css"

function Header() {

  const {setIsSidebarExpanded} = useContext(DataContext)

  return (
    <div id="header">
      <img
        id="menu-toggle"
        src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802155/UKFoodWeb/Homepage_Misc/menuToggle_ko8ivf.png"
        alt="burger"
        onClick={() => setIsSidebarExpanded(true)}
      />
    </div>
  )
}

export default Header
