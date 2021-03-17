import React from "react"

import "./style.css"

function NameCard(props) {

  const producer = props.thisProducer

  return (
    <div id="main-card">
      <img id="main-logo" src={producer.logoSmall} alt="logoSmall" />
      <div id="main-card-content">

        <div id="main-card-text">
          <h1>{producer.name}</h1>
          <p>{producer.description}</p>
        </div>

        {producer.isFavourite ?
          <img className="fav-star" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/starGreen_skispc.png" alt="star" /> :
          <img className="fav-star" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/starGray_anuyus.png" alt="star" />}
      </div>
    </div>
  )
}

export default NameCard
