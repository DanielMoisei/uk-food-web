import React, {useState, useEffect} from "react"
import {  BrowserRouter as Router,  Switch, Route,  Link  } from "react-router-dom";
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Homepage from "./Components/Homepage"
import Firebase from "./Firebase.js"
import ProducerPage from "./Components/ProducerPage"

function App() {

  const [allProducts, setAllProducts] = useState([])
  const [allProducers, setAllProducers] = useState([])
  const [categories, setCategories] = useState([])

  const [relProducts, setRelProducts] = useState([])
  const [productCategories, setProductCategories] = useState([])
  const [producerCategories, setProducerCategories] = useState([])

  const [focusProducer, setFocusProducer] = useState()

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
              <ProducerPage
                allProducts={allProducts} setAllProducts={setAllProducts}
                allProducers={allProducers} setAllProducers={setAllProducers}
                categories={categories} setCategories={setCategories}
                relProducts={relProducts} setRelProducts={setRelProducts}
                productCategories={productCategories} setProductCategories={setProductCategories}
                producerCategories={producerCategories} setProducerCategories={setProducerCategories}
                focusProducer={focusProducer} setFocusProducer={setFocusProducer}
              />
            </Route>

            <Route path="/">
              <Homepage
                allProducts={allProducts} setAllProducts={setAllProducts}
                allProducers={allProducers} setAllProducers={setAllProducers}
                categories={categories} setCategories={setCategories}
                relProducts={relProducts} setRelProducts={setRelProducts}
                productCategories={productCategories} setProductCategories={setProductCategories}
                producerCategories={producerCategories} setProducerCategories={setProducerCategories}
                focusProducer={focusProducer} setFocusProducer={setFocusProducer}
              />
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
