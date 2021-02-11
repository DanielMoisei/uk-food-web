import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {DataContext} from "../../../dataContext.js"

import logoLarge from "./Resources/logoLarge.png"
import searchIcon from "./Resources/searchIconWhite.png"

import "./style.css"

function WideSidebar() {

  const {setIsSidebarExpanded} = useContext(DataContext)

  return (
    <>
      <div id="wide-overlay" onClick={() => setIsSidebarExpanded(false)}>
      </div>

      <div id="wide-sidebar">

        <Link to="/" onClick={() => setIsSidebarExpanded(false)}>
          <img id="wide-sidebar-logo" src={logoLarge} alt="logo" />
        </Link>

        <Link to="/search">
          <div id="wide-sidebar-search" onClick={() => setIsSidebarExpanded(false)}>
            <img id="wide-sidebar-search-icon" src={searchIcon} alt="search" />
            <h3 id="wide-search-text">Search products</h3>
          </div>
        </Link>

      </div>
    </>
  )
}

export default WideSidebar
