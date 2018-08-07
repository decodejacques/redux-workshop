import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Preview from './Preview.js'
import ThemeParameters from './ThemeParameters.js'

let reducer = function (state, action) {
  if (action.type === 'changeColor') {
    return {...state, bgcolor: action.color}
  }
  if (action.type === 'changeFont') {
    return {...state, fontName: action.font}
  }
  if (action.type === 'changeItalic') {
    return {...state, isItalic: action.italic}
  }
  return state
}

let theStore = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={theStore}>
        <div style={{display: "flex"}}>
          <Preview/>
          <ThemeParameters/>
        </div>
      </Provider>
    );
  }
}

export default App;
