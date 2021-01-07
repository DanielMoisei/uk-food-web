import React, {useState, useEffect} from "react"
import Firebase from "../../../Firebase.js"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./style.css"
import leftArrow from "./Resources/leftArrow.svg"
import rightArrow from "./Resources/rightArrow.svg"

function FeaturedProducts(props) {

  useEffect(() => {
    Firebase.updateState("Products", props.setAllProducts);
  }, []);

  return (
    <div className="products-section-container content">

      <h1 id="products-section-title">Featured products</h1>

      <Carousel
        slidesPerPage={5}
        slidesPerScroll={5}
        infinite
        arrowLeft={<img className="slides-arrow" src={leftArrow} alt="arrow" />}
        arrowRight={<img className="slides-arrow" src={rightArrow} alt="arrow" />}
        addArrowClickHandler
        className="products-container"
      >
          {props.allProducts.map(product => {
            return (
              <div
                key={product.id}
                className="product-div-style"
              >
                <img src={product.image} alt="" />
              </div>
            )
          })}
      </Carousel>

    </div>
  )
}

export default FeaturedProducts
