import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

// This component doesn't use any data in the store! Fix this.
class DisplayTodos extends Component {
  render = () => {
    return (
      <div>
        <ul>
          {this.props.todosList.map(todoItem => (
            <div>{todoItem}</div>
          ))}
        </ul>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return { todosList: state.todos };
};

export default connect(mapStateToProps)(DisplayTodos);
