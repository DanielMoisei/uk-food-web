import React, {useState} from "react"
import {Link} from "react-router-dom"

import logoSmall from "./Resources/logoSmall.png"
import searchIconWhite from "./Resources/searchIconWhite.png"
import searchIconNavy from "./Resources/searchIconNavy.png"

import "./style.css"

function ThinSidebar() {

  const [searchIcon, setSearchIcon] = useState(searchIconWhite)

  return (
    <div id="thin-sidebar">

      <Link to="/">
        <img id="thin-sidebar-logo" src={logoSmall} alt="logo" />
      </Link>

      <Link to="/search">
        <div
          id="thin-sidebar-search-square"
          onMouseEnter={() => setSearchIcon(searchIconNavy)}
          onMouseLeave={() => setSearchIcon(searchIconWhite)}
        >
          <img id="thin-sidebar-search" src={searchIcon} alt="search" />
        </div>
      </Link>

    </div>
  )
}

export default ThinSidebar
