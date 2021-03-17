import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"

import {DataContext} from "../../../dataContext.js"

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import "./style.css"

function NameCard(props) {

  const {relProducer} = useContext(DataContext)
  const product = props.thisProduct

  const [focusImage, setFocusImage] = useState(product.images[0])

  return (
    <div id="main-product-card">

      <div id="image-car">
        <img id="car-focused-img" src={focusImage} alt="" />
        <Carousel
          slidesPerPage={4}
          slidesPerScroll={4}
          arrowLeft={<img id="arrow-left" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/leftArrow_eb5rcz.svg" alt="arrow" />}
          arrowRight={<img id="arrow-right" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802155/UKFoodWeb/Homepage_Misc/rightArrow_gdczqb.svg" alt="arrow" />}
          addArrowClickHandler
          className="product-car"
        >

            {product.images.map(image => <img key={image} className="product-car-image" onClick={() => setFocusImage(image)} src={image} alt="" />)}

        </Carousel>
      </div>

      <div id="main-product-card-text">

        <div id="main-product-info">
          <h1>{product.name}</h1>
          <div id="fav-row">
            <h2>Producer: <Link to={"/producer/" + relProducer.name}>{relProducer.name}</Link></h2>
            <img src={product.isFavourite ?
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/starGreen_skispc.png" :
              "https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/starGray_anuyus.png"}
              alt="isFav"
            />
          </div>
          <h3 id="price-tag">£{product.price}</h3>
        </div>

        <hr id="info-line" />

        <div id="main-product-description">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>

      </div>

    </div>
  )
}

export default NameCard
