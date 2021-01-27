import React from "react"

import "./style.css"

function NewsCard(props) {
  return (
    <div className="news-card">
      <img src={props.image} alt="news" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default NewsCard
