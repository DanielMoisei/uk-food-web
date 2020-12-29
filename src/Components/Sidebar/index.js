import React from "react"
import "./style.css"
import logoSmall from "./Resources/logoSmall.png"
import searchIcon from "./Resources/searchIcon.png"

function Sidebar() {
  return (
    <div id="sidebar">
      <img id="sidebar-logo" src={logoSmall} />
      <div id="sidebar-search-square">
        <img id="sidebar-search" src={searchIcon} />
      </div>
    </div>
  )
}

export default Sidebar
