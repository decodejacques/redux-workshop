import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Clickable from './Clickable.js'
import Status from './Status.js'

let reducer = function (state, action) {
  if (action.type === 'click') {
    if (state.playerLost) {
      // do nothing
      return state
    }
    return { ...state, playerWon: true }
  }
  if (action.type === 'timesUp') {
    if (state.playerWon) {
      // do nothing
      return state
    }
    return { ...state, playerLost: true }
  }
  return state
}

let theStore = createStore(
  reducer,
  { playerLost: false, playerWon: false },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store={theStore}>
        <div className="App">
          <Clickable />
          <Status />
        </div>
      </Provider>
    );
  }
}

export default App;
