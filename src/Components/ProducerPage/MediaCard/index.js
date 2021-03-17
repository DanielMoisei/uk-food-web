import React, {useState, useEffect} from "react"

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import "./style.css"

function MediaCard(props) {

  const producer = props.thisProducer
  const [focusImage, setFocusImage] = useState()

  useEffect(() => {
    setFocusImage(producer.images[0])
  }, [])

  return (
    <div id="media-card">
      <img id="focus-image" src={focusImage} alt="" />

      <div id="media-card-content">

        <div id="values-categories">
          <div className="producer-values">
            <h2>Producer values</h2>
            <div id="values">
              {producer.values.map(value => <img src={value} alt="" />)}
            </div>
          </div>

          <div id="prod-cat" className="producer-values">
            <h2>Producer categories</h2>
            <div id="vcat">
              {producer.vcategories.map(vcat => <img src={vcat} alt="" />)}
            </div>
          </div>
        </div>

        <hr id="line" />

        <Carousel
          slidesPerPage={7}
          slidesPerScroll={7}
          arrowLeft={<img id="arrow-left" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/leftArrow_eb5rcz.svg" alt="arrow" />}
          arrowRight={<img id="arrow-right" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802155/UKFoodWeb/Homepage_Misc/rightArrow_gdczqb.svg" alt="arrow" />}
          addArrowClickHandler
          className="producer-car"
        >

            {producer.images.map(image => <img className="producer-car-image" onClick={() => setFocusImage(image)} src={image} alt="" />)}

        </Carousel>
      </div>
    </div>
  )
}

export default MediaCard
