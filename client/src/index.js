import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Footer />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


