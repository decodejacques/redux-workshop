import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

// This component doesn't use any data in the store! Fix this.
class DisplayTodos extends Component {
  reverseList = () => {
    this.props.dispatch({ type: "reverseTodos" });
  };
  render = () => {
    return (
      <div>
        <ul>
          {this.props.todosList.map(todoItem => (
            <div>{todoItem}</div>
          ))}
        </ul>
        {this.props.todosList.length > 1 ? (
          <button onClick={this.reverseList}>Reverse</button>
        ) : null}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return { todosList: state.todos };
};

export default connect(mapStateToProps)(DisplayTodos);
