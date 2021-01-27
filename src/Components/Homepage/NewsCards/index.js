import React from "react"

import NewsCard from "./NewsCard"
import bakerAtWork from "./Resources/bakerAtWork.jpg"
import latestNews from "./Resources/latestNews.jpg"
import nutritionTips from "./Resources/nutritionTips.jpg"
import warehouseStaff from "./Resources/warehouseStaff.jpg"

import "./style.css"

function NewsCards() {
  return(
    <div id="news-cards-container" className="content">
      <NewsCard
        image={bakerAtWork}
        title="Solving producer problems"
        description="We've noticed a country-wide problem with producers being unable to timely deliver their products so we decided to help them out"
      />
      <NewsCard
        image={latestNews}
        title="Most recent news"
        description="Check out the latest hot articles about produce, health, nutrition, industry problems and much more about everything in these fields"
      />
      <NewsCard
        image={nutritionTips}
        title="Nutrition tips & tricks"
        description="Have you ever wondered what you should eat and when and how much? Check out this article with Dr. Jan where she explains how it all works"
      />
      <NewsCard
        image={warehouseStaff}
        title="Easy product sourcing"
        description="We've now partnered with Macther Delivery in order to help our producers get the raw materials they need in order to keep doing what they do best"
      />
    </div>
  )
}

export default NewsCards
