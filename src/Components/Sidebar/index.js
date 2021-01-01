import React from "react"
import "./style.css"
import logoSmall from "./Resources/logoSmall.png"
import searchIcon from "./Resources/searchIcon.png"

function Sidebar() {
  return (
    <div id="sidebar">
      <img id="sidebar-logo" src={logoSmall} alt="logo" />
      <div id="sidebar-search-square">
        <img id="sidebar-search" src={searchIcon} alt="search" />
      </div>
    </div>
  )
}

export default Sidebar
