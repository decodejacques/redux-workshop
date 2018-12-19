import React, { Component } from "react";
import "./App.css";
import Preview from "./Preview.js";
import ThemeParameters from "./ThemeParameters.js";

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Preview />
        <ThemeParameters />
      </div>
    );
  }
}

export default App;
