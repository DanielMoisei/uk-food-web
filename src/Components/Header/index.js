import React from "react"

import menuToggle from "./Resources/menuToggle.png"

import "./style.css"

function Header() {
  return (
    <div id="header">
      <img id="menu-toggle" src={menuToggle} alt="burger" />
    </div>
  )
}

export default Header
