import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import store from "./redux/store";
import { Provider } from 'react-redux';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>


    <BrowserRouter>
    <App />
    <Footer />
    
    </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


