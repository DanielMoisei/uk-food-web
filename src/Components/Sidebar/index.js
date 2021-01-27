import React from "react"
import {Link} from "react-router-dom"

import logoSmall from "./Resources/logoSmall.png"
import searchIcon from "./Resources/searchIconWhite.png"

import "./style.css"

function Sidebar() {
  return (
    <div id="sidebar">

      <Link to="/">
        <img id="sidebar-logo" src={logoSmall} alt="logo" />
      </Link>

      <Link to="/search">
        <div id="sidebar-search-square">
          <img id="sidebar-search" src={searchIcon} alt="search" />
        </div>
      </Link>

    </div>
  )
}

export default Sidebar
