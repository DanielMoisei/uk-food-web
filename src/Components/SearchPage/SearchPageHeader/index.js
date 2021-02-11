import React, {useContext} from "react"

import {DataContext} from "../../../dataContext.js"

import menuToggle from "./Resources/menuToggle.png"
import searchIcon from "./Resources/searchIcon.png"

import "./style.css"


function SearchPageHeader() {

  const {setIsSidebarExpanded, nameFilter, setNameFilter} = useContext(DataContext)

  const handleChange = (e) => {
    setNameFilter(e.target.value)
  }

  return (
    <div id="search-header">
      <img id="search-menu-toggle" src={menuToggle} alt="burger" onClick={() => setIsSidebarExpanded(true)} />
      <form onSubmit={(e) => e.preventDefault()} id="search-bar-form">
        <input
          id="search-bar"
          type="text"
          value={nameFilter}
          placeholder="Search..."
          onChange={handleChange}
        />
        <span id="search-bar-icon"><img id="search-icon" src={searchIcon} alt="search" /></span>
      </form>
    </div>
  )
}

export default SearchPageHeader
