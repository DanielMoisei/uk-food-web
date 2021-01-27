import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"

import {DataContextProvider} from "./dataContext.js"

import App from './App'

import './style.css'




ReactDOM.render(
  <Router>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </Router>,
  document.getElementById('root'));
