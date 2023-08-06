import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
const bodyPage = document.getElementsByTagName("body");
console.log(bodyPage[0]);
ReactDOM.render(<App />, document.getElementById("root"));
