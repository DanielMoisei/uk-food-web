import React, {useState, useEffect} from "react"
import {  BrowserRouter as Router,  Switch, Route,  Link  } from "react-router-dom";
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Homepage from "./Components/Homepage"
import Firebase from "./Firebase.js"
import ProducerPage from "./Components/ProducerPage"

function App() {

  return (
    <div id="body">
      <Sidebar />
      <div id="content">
        <Header />

        <Router>

          <Link to="/">Home</Link> <br />
          <Link to="/producer">Producer Page</Link>

          <Switch>

            <Route path="/producer">
              <ProducerPage />
            </Route>

            <Route path="/">
              <Homepage />
            </Route>

          </Switch>

        </Router>
      </div>
    </div>
  );
}

export default App;


// FIND OUT HOW TO ROUTE WITH PRODUCER DIVS BEING LINKS
// WRITE THEIR RELATIONSHIPS INTO THE DATABASE
