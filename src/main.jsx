import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Web3Provider } from "./context/web3Context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Web3Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Web3Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
