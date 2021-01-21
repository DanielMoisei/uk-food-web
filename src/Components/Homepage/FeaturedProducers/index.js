import React, {useContext} from "react"
import Firebase from "../../../Firebase.js"
import {DataContext} from "../../../dataContext.js"
import {Link} from "react-router-dom"

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import "./style.css"
import leftArrow from "./Resources/leftArrow.svg"
import rightArrow from "./Resources/rightArrow.svg"

function FeaturedProducers(props) {

  const {allProducers, setFocusProducer, setRelProducts} = useContext(DataContext)

  return (
    <div className="producers-section-container content">

      <h1 id="producers-section-title">Featured producers</h1>

      <Carousel
        slidesPerPage={4}
        slidesPerScroll={4}
        infinite
        arrowLeft={<img className="slides-arrow" src={leftArrow} alt="arrow" />}
        arrowRight={<img className="slides-arrow" src={rightArrow} alt="arrow" />}
        addArrowClickHandler
        className="producers-container"
      >

          {allProducers.map(producer => {
            return (
              <Link key={producer.id} to="/producer">
                <div
                  onClick={
                    () => {
                      Firebase.updateStateWithProducts(producer.id, setRelProducts);
                      setFocusProducer(producer);
                    }
                  }
                  className="producer-div-style"
                >
                  <img src={producer.logoLarge} alt="" />
                  <h2>{producer.name}</h2>
                </div>
              </Link>
            )}
          )}

      </Carousel>

    </div>
  )
}

export default FeaturedProducers
