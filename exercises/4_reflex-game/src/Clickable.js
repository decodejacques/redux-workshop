import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class Clickable extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => { }
  render= () => {
    return (
      <button onClick={this.handleClick}> Click </button>
    );
  }
}

export default Clickable;
