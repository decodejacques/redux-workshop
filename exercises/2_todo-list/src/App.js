import React, { Component } from 'react';
import './App.css';

import DisplayTodos from './DisplayTodos.js'
import InputTodo from './InputTodo.js'

class App extends Component {
  render() {
    return (
        <div>
          <DisplayTodos />
          <InputTodo />
        </div>
    );
  }
}

export default App;
