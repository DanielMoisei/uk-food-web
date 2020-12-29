import React from "react"
import "./style.css"
import menuToggle from "./Resources/menuToggle.png"


function Header() {
  return (
    <div id="header">
      <img id="menu-toggle" src={menuToggle} />
    </div>
  )
}

export default Header
