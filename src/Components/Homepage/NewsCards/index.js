import React from "react"

import NewsCard from "./NewsCard"

import "./style.css"

function NewsCards() {
  return(
    <div id="news-cards-container" className="content">
      <NewsCard
        image="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802153/UKFoodWeb/Homepage_Misc/bakerAtWork_ahdqy9.jpg"
        title="Solving producer problems"
        description="We've noticed a country-wide problem with producers being unable to timely deliver their products so we decided to help them out"
      />
      <NewsCard
        image="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802153/UKFoodWeb/Homepage_Misc/latestNews_yz2spm.jpg"
        title="Most recent news"
        description="Check out the latest hot articles about produce, health, nutrition, industry problems and much more about everything in these fields"
      />
      <NewsCard
        image="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802155/UKFoodWeb/Homepage_Misc/nutritionTips_udmnan.jpg"
        title="Nutrition tips & tricks"
        description="Have you ever wondered what you should eat and when and how much? Check out this article with Dr. Jan where she explains how it all works"
      />
      <NewsCard
        image="https://res.cloudinary.com/dbtu3hb0f/image/upload/v1615802156/UKFoodWeb/Homepage_Misc/warehouseStaff_vipyak.jpg"
        title="Easy product sourcing"
        description="We've now partnered with Macther Delivery in order to help our producers get the raw materials they need in order to keep doing what they do best"
      />
    </div>
  )
}

export default NewsCards
