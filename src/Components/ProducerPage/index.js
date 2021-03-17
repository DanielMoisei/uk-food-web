import React, {useEffect, useContext} from "react"
import {useParams, useHistory} from "react-router-dom"

import Firebase from "../../Firebase.js"
import {DataContext} from "../../dataContext.js"

import NameCard from "./NameCard"
import MediaCard from "./MediaCard"
import ProductsCard from "./ProductsCard"

import "./style.css"

function ProducerPage(props) {

  const {allProducers, relProducts, setRelProducts} = useContext(DataContext)

  const history = useHistory()
  const {producerName} = useParams()
  const thisProducer = allProducers.find(producer => producer.name === producerName)

  useEffect(() => {
    Firebase.updateStateWithProducts(thisProducer.id, setRelProducts);
    return () => {
      setRelProducts([]);
    }
  }, [])

  return (
    <div id="producer-page">
      <button id="back-button" onClick={() => history.goBack()}>
        <img src="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802153/UKFoodWeb/Homepage_Misc/backArrow_asteca.svg" alt=""/>
      </button>
      <div id="producer-page-cards">
        <NameCard thisProducer={thisProducer} />
        <MediaCard thisProducer={thisProducer} />
        {relProducts.length ? <ProductsCard thisProducer={thisProducer} /> : null}
      </div>
    </div>
  )
}

export default ProducerPage
