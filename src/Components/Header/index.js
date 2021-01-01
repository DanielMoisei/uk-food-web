import React from "react"
import "./style.css"
import menuToggle from "./Resources/menuToggle.png"


function Header() {
  return (
    <div id="header">
      <img id="menu-toggle" src={menuToggle} alt="burger" />
    </div>
  )
}

export default Header
