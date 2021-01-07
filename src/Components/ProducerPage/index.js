import React, {useEffect} from "react"
import NameCard from "./NameCard"
import Product from "./Product"

function ProducerPage(props) {

  useEffect(() => {
    return () => {
      props.setRelProducts([]);
      props.setFocusProducer();
    }
  }, [])

  return (
    <div>
      <NameCard producer={props.focusProducer} />

    </div>
  )
}

export default ProducerPage
