import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {DataContext} from "../../../dataContext.js"

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import "./style.css"

function FeaturedProducers(props) {

  const {allProducers} = useContext(DataContext)

  return (
    <div className="producers-section-container content">

      <h1 id="producers-section-title">Featured producers</h1>

      <Carousel
        slidesPerPage={4}
        slidesPerScroll={4}
        infinite
        arrowLeft={<img className="slides-arrow" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/leftArrow_eb5rcz.svg" alt="arrow" />}
        arrowRight={<img className="slides-arrow" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802155/UKFoodWeb/Homepage_Misc/rightArrow_gdczqb.svg" alt="arrow" />}
        addArrowClickHandler
        className="producers-container"
      >

          {allProducers.map(producer => {
            if(producer.id <= 4) {
              return (
                <Link key={producer.id} to={"/producer/" + producer.name}>
                  <div className="producer-div-style">
                    <img src={producer.logoLarge} alt="producerLogo" />
                    <h2>{producer.name}</h2>
                  </div>
                </Link>
              )
            }
          })}

      </Carousel>

    </div>
  )
}

export default FeaturedProducers
