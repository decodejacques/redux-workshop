import React, { Component } from 'react';
import './App.css';



class InputTodo extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault()

    // You need to add code here
  }
  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value })
  }
  render = () => {
    return (<form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} />
      <input type="submit" />
    </form>)
  }
}



export default InputTodo;
