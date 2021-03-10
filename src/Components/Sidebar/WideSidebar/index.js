import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"

import {DataContext} from "../../../dataContext.js"

import logoLarge from "./Resources/logoLarge.png"
import searchIconWhite from "./Resources/searchIconWhite.png"
import searchIconNavy from "./Resources/searchIconNavy.png"
import leaveIconWhite from "./Resources/leaveIconWhite.svg"
import leaveIconNavy from "./Resources/leaveIconNavy.svg"

import "./style.css"

function WideSidebar(props) {

  const {setIsSidebarExpanded, isSidebarExpanded} = useContext(DataContext)
  const [searchIcon, setSearchIcon] = useState(searchIconWhite)
  const [leaveIcon, setLeaveIcon] = useState(leaveIconWhite)

  return (
    <>
      <div id={isSidebarExpanded ? "wide-overlay-active" : "wide-overlay-hidden"} onClick={() => setIsSidebarExpanded(false)}>
      </div>

      <div id= {isSidebarExpanded ? "wide-sidebar-active" : "wide-sidebar-hidden"}>

        <Link to="/" onClick={() => setIsSidebarExpanded(false)}>
          <img id="wide-sidebar-logo" src={logoLarge} alt="logo" />
        </Link>

        <Link to="/search">
          <div
            id="wide-sidebar-search"
            onClick={() => setIsSidebarExpanded(false)}
            onMouseEnter={() => setSearchIcon(searchIconNavy)}
            onMouseLeave={() => setSearchIcon(searchIconWhite)}
          >
            <div id="wide-search-content">
              <img id="wide-sidebar-search-icon" src={searchIcon} alt="search" />
              <h3 id="wide-search-text">Search products</h3>
            </div>
          </div>
        </Link>

        <Link to="/REPLACEME">
          <div
            id="wide-sidebar-leave"
            onClick={() => setIsSidebarExpanded(false)}
            onMouseEnter={() => setLeaveIcon(leaveIconNavy)}
            onMouseLeave={() => setLeaveIcon(leaveIconWhite)}
          >
            <div id="wide-leave-content">
              <img id="wide-sidebar-leave-icon" src={leaveIcon} alt="leave" />
              <h3 id="wide-leave-text">Leave this app</h3>
            </div>
          </div>
        </Link>

      </div>
    </>
  )
}

export default WideSidebar
