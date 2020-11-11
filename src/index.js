import React from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
import "./assets/css/main.css";
import App from "./App";
import { StylesProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
