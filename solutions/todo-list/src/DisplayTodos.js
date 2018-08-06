import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'


class DisplayTodos extends Component {
  render() {
    return (<ul>
      {this.props.todos.map(x => (<div>{x}</div>))}
    </ul>)
  }
}

let mapStateToProps = function(state) {
  return {todos: state.todos}
}

let ConnectedDisplayTodos = connect(mapStateToProps)(DisplayTodos)


export default ConnectedDisplayTodos;
