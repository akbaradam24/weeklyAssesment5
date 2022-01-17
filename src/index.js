import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./component/Checkout";
import { Provider } from "react-redux";
import globalStore from "./Redux/Store/Store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
