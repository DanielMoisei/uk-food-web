import React from "react"
import {Link} from "react-router-dom"

import logoSmall from "./Resources/logoSmall.png"
import searchIcon from "./Resources/searchIconWhite.png"

import "./style.css"

function ThinSidebar() {
  return (
    <div id="thin-sidebar">

      <Link to="/">
        <img id="thin-sidebar-logo" src={logoSmall} alt="logo" />
      </Link>

      <Link to="/search">
        <div id="thin-sidebar-search-square">
          <img id="thin-sidebar-search" src={searchIcon} alt="search" />
        </div>
      </Link>

    </div>
  )
}

export default ThinSidebar
