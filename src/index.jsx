import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StylesProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
