import React, { Component } from 'react';
import './App.css';



class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }
  handleSubmit(evt) {
    evt.preventDefault()

    // You need to add code here
  }
  handleChange(evt) {
    this.setState({ inputValue: evt.target.value })
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} />
      <input type="submit" />
    </form>)
  }
}



export default InputTodo;
