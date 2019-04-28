import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class Clickable extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = () => {
    this.props.dispatch({ type: 'click' })
  }
  render= () => {
    return (
      <button onClick={this.handleClick}> Click </button>
    );
  }
}

let ConnectedClickable = connect()(Clickable)
export default ConnectedClickable;
