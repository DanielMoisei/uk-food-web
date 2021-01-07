import React from "react"

function Product(props) {
  return (
    <div>
      <h1>{props.productName}</h1>
      <h1>{props.price}</h1>
    </div>
  )
}

export default Product
