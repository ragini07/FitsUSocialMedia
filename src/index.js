import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './app/store';
import { Provider } from 'react-redux';

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
  <Provider store={store}>
  
     <App />
  
  
  </Provider>
  </Router>
   
,
  document.getElementById("root")
);
