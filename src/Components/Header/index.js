import React, {useContext} from "react"

import {DataContext} from "../../dataContext.js"

import menuToggle from "./Resources/menuToggle.png"

import "./style.css"

function Header() {

  const {setIsSidebarExpanded} = useContext(DataContext)

  return (
    <div id="header">
      <img id="menu-toggle" src={menuToggle} alt="burger" onClick={() => setIsSidebarExpanded(true)} />
    </div>
  )
}

export default Header
