import React, {useEffect, useContext} from "react"
import NameCard from "./NameCard"
import Product from "./Product"
import {DataContext} from "../../dataContext.js"

function ProducerPage(props) {

  const {setRelProducts, setFocusProducer, focusProducer} = useContext(DataContext)

  useEffect(() => {
    return () => {
      setRelProducts([]);
      setFocusProducer();
    }
  }, [])

  return (
    <div>
      <NameCard producer={focusProducer} />
    </div>
  )
}

export default ProducerPage
