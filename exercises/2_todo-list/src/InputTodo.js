import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch({ type: "addTodo", todoItem: this.state.inputValue });
    this.setState({ inputValue: "" });
  };
  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.inputValue} />
        <input type="submit" />
      </form>
    );
  };
}

export default connect()(InputTodo);
