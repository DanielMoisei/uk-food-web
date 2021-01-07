import React from "react"

function NameCard(props) {
  return (
    <div>
      <img src={props.producer.logoSmall}/>
      <div>
        <h1>{props.producer.name}</h1>
        <p>{props.producer.description}</p>
      </div>
    </div>
  )
}

export default NameCard
