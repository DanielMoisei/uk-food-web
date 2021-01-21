import React, {useState, useContext} from "react"
import "./style.css"
import {DataContext} from "../../../dataContext.js"

function NameCard(props) {

  const {focusProducer, setFocusProducer} = useContext(DataContext)

  const toggleFav = () => {
    setFocusProducer(prevProducer => {
      return {
        ...prevProducer,
        isFavourite: !prevProducer.isFavourite
      }
    })
  }

  return (
    <div id="main-card">
      <img id="main-logo" src={focusProducer.logoSmall} alt="logoSmall" />
      <div id="main-card-content">

        <div id="main-card-text">
          <h1>{focusProducer.name}</h1>
          <p>{focusProducer.description}</p>
        </div>

        {focusProducer.isFavourite ?
          <img onClick={toggleFav} className="fav-star" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1611164917/starGreen_vh0tgd.png" alt="star" /> :
          <img onClick={toggleFav} className="fav-star" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1611164917/starGray_xm5y3y.png" alt="star" />}
      </div>
    </div>
  )
}

export default NameCard
