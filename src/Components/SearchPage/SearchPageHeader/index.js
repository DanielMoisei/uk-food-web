import React, {useContext} from "react"

import {DataContext} from "../../../dataContext.js"

import "./style.css"


function SearchPageHeader() {

  const {setIsSidebarExpanded, nameFilter, setNameFilter} = useContext(DataContext)

  const handleChange = (e) => {
    setNameFilter(e.target.value)
  }

  return (
    <div id="search-header">
      <img
        id="search-menu-toggle"
        src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802155/UKFoodWeb/Homepage_Misc/menuToggle_ko8ivf.png"
        alt="burger"
        onClick={() => setIsSidebarExpanded(true)}
      />
      <form onSubmit={(e) => e.preventDefault()} id="search-bar-form">
        <input
          id="search-bar"
          type="text"
          value={nameFilter}
          placeholder="Search..."
          onChange={handleChange}
        />
        <span id="search-bar-icon">
          <img
            id="search-icon"
            src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/searchIcon_v35fua.png"
            alt="search"
          />
        </span>
      </form>
    </div>
  )
}

export default SearchPageHeader
