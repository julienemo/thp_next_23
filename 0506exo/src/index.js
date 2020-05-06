import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import LowerCaseForm from "./LowerCaseForm";
import RandomRecipe from "./RandomRecipe";

class App extends Component {
  render() {
    return (
      <>
        <LowerCaseForm />
        <RandomRecipe />
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
