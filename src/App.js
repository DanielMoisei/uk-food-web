import React, {useState, useEffect, useContext} from "react"
import {Switch, Route} from "react-router-dom"

import Firebase from "./Firebase.js"
import {DataContext} from "./dataContext.js"

import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Homepage from "./Components/Homepage"
import ProducerPage from "./Components/ProducerPage"
import ProductPage from "./Components/ProductPage"


function App() {

  const {allProducers, allProducts} = useContext(DataContext)

  return (
    <div id="body">
      <Sidebar />
      <div id="content">
        <Header />

          <Switch>

            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/producer/:producerName">
              {allProducers.length ? <ProducerPage /> : null}
            </Route>

            <Route path="/product/:productName">
              {allProducts.length ? <ProductPage /> : null}
            </Route>

          </Switch>

      </div>
    </div>
  );
}

export default App
