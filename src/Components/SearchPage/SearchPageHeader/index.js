import React, {useState} from "react"

import menuToggle from "./Resources/menuToggle.png"
import searchIcon from "./Resources/searchIcon.png"

import "./style.css"


function SearchPageHeader() {

  const [query, setQuery] = useState("")
  const [nameFilter, setNameFilter] = useState("")

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameFilter(query)
  }

  return (
    <div id="search-header">
      <img id="search-menu-toggle" src={menuToggle} alt="burger" />
      <form onSubmit={handleSubmit} id="search-bar-form">
        <input
          id="search-bar"
          type="text"
          value={query}
          placeholder="Search..."
          onChange={handleChange}
        />
        <button id="search-submit"><img id="search-bar-icon" src={searchIcon} alt="search" /></button>
      </form>
    </div>
  )
}

export default SearchPageHeader
