import React, {useState} from "react"
import {Link} from "react-router-dom"

import logoSmall from "./Resources/logoSmall.png"
import searchIconWhite from "./Resources/searchIconWhite.png"
import searchIconNavy from "./Resources/searchIconNavy.png"
import leaveIconWhite from "./Resources/leaveIconWhite.svg"
import leaveIconNavy from "./Resources/leaveIconNavy.svg"

import "./style.css"

function ThinSidebar() {

  const [searchIcon, setSearchIcon] = useState(searchIconWhite)
  const [leaveIcon, setLeaveIcon] = useState(leaveIconWhite)

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

      <Link to="/REPLACEME">
        <div
          id="thin-sidebar-leave-square"
          onMouseEnter={() => setLeaveIcon(leaveIconNavy)}
          onMouseLeave={() => setLeaveIcon(leaveIconWhite)}
        >
          <img id="thin-sidebar-leave" src={leaveIcon} alt="leave" />
        </div>
      </Link>

    </div>
  )
}

export default ThinSidebar
