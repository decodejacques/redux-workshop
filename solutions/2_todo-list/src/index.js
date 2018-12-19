import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

// reducer takes a state and an action and returns a new state
let reducer = function(state, action) {
  if (action.type === "addTodo") {
    return { todos: state.todos.concat(action.content) };
  }
  return state; // The action was not recognized
};

const store = createStore(
  reducer,
  { todos: [] }, // The initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Needed for the redux devtools extension
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
