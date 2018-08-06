import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DisplayTodos from './DisplayTodos.js'
import InputTodo from './InputTodo.js'

// reducer takes a state and an action and returns a new state
let reducer = function (state, action) {
  if (action.type === "addTodo") {
    return { todos: state.todos.concat(action.content) }
  }
  return state; // The action was not recognized (should not happen)
}

const store = createStore(
  reducer,
  { todos: [] }, // The initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Needed for the redux devtools extension
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <DisplayTodos />
          <InputTodo />
        </div>
      </Provider>
    );
  }
}

export default App;
