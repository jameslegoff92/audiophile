import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

const myElement = document.getElementById('root');

if (myElement !== null) {
  console.log('hiii');
  const root = ReactDOM.createRoot(myElement);
  root.render(<App />);
}