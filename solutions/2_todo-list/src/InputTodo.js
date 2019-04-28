import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'


class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }
  handleSubmit(evt) {
    evt.preventDefault()

    this.props.dispatch({
      type: "addTodo", // This would be useful if there were multiple actions
      content: this.state.inputValue
    })
  }
  handleChange(evt) {
    this.setState({ inputValue: evt.target.value })
  }
  render = () => {
    return (<form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} />
      <input type="submit" />
    </form>)
  }
}

let ConnectedInputTodo = connect()(InputTodo)


export default ConnectedInputTodo;
