import React, {useContext} from "react"
import {Switch, Route} from "react-router-dom"

import {DataContext} from "./dataContext.js"

import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Homepage from "./Components/Homepage"
import ProducerPage from "./Components/ProducerPage"
import ProductPage from "./Components/ProductPage"
import SearchPageHeader from "./Components/SearchPage/SearchPageHeader"
import SearchPage from "./Components/SearchPage"


function App() {

  const {allProducers, allProducts} = useContext(DataContext)

  return (
    <div id="body">
      <Sidebar />
      <div id="content">

          <Switch>

            <Route exact path="/">
              <Header />
              <Homepage />
            </Route>

            <Route path="/producer/:producerName">
              <Header />
              {allProducers.length ? <ProducerPage /> : null}
            </Route>

            <Route path="/product/:productName">
              <Header />
              {allProducts.length ? <ProductPage /> : null}
            </Route>

            <Route path="/search">
              <SearchPageHeader />
              {allProducts.length ? <SearchPage /> : null}
            </Route>

          </Switch>

      </div>
    </div>
  )
}

export default App
