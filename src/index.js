import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import {DataContextProvider} from "./dataContext.js"
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
  <Router>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </Router>,
  document.getElementById('root'));
