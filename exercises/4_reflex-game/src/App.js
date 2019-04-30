import React, { Component } from 'react';
import './App.css';
import Clickable from './Clickable.js'
import Status from './Status.js'

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <Clickable />
        <Status />
      </div>
    );
  }
}

export default App;
