import React, {useState, useEffect, useContext} from "react"
import {Switch, Route, Link} from "react-router-dom"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Homepage from "./Components/Homepage"
import Firebase from "./Firebase.js"
import ProducerPage from "./Components/ProducerPage"
import {DataContext} from "./dataContext.js"

function App() {

  const {allProducers} = useContext(DataContext)

  return (
    <div id="body">
      <Sidebar />
      <div id="content">
        <Header />

          <Switch>

            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="/producer/:producerName" >
              {allProducers.length ? <ProducerPage /> : null}
            </Route>

          </Switch>

      </div>
    </div>
  );
}

export default App
