import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import {DataContextProvider} from "./dataContext.js"


ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById('root'));
