import React, {useEffect, useContext} from "react"
import NameCard from "./NameCard"
import MediaCard from "./MediaCard"
import ProductsCard from "./ProductsCard"
import {DataContext} from "../../dataContext.js"
import Firebase from "../../Firebase.js"
import {useParams} from "react-router-dom"
import "./style.css"

function ProducerPage(props) {

  const {allProducers, relProducts, setRelProducts} = useContext(DataContext)

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
      <NameCard thisProducer={thisProducer} />
      <MediaCard thisProducer={thisProducer} />
      {relProducts.length && <ProductsCard thisProducer={thisProducer} />}
    </div>
  )
}

export default ProducerPage
