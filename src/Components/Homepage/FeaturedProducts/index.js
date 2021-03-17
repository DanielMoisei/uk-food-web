import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {DataContext} from "../../../dataContext.js"

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./style.css"

function FeaturedProducts(props) {

  const {allProducts} = useContext(DataContext)

  return (
    <div className="products-section-container content">

      <h1 id="products-section-title">Featured products</h1>

      <Carousel
        slidesPerPage={5}
        slidesPerScroll={5}
        infinite
        arrowLeft={<img className="slides-arrow" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802154/UKFoodWeb/Homepage_Misc/leftArrow_eb5rcz.svg" alt="arrow" />}
        arrowRight={<img className="slides-arrow" src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802155/UKFoodWeb/Homepage_Misc/rightArrow_gdczqb.svg" alt="arrow" />}
        addArrowClickHandler
        className="products-container"
      >
          {allProducts.map(product => {
            return (
              <Link key={product.id} to={"/product/" + product.name}>
                <div className="product-div-style">
                  <img src={product.images[0]} alt="productImg" />
                </div>
              </Link>
            )
          })}
      </Carousel>

    </div>
  )
}

export default FeaturedProducts
