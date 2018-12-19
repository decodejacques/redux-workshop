import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

let reducer = function(state, action) {
  if (action.type === "changeColor") {
    return { ...state, bgcolor: action.color };
  }
  if (action.type === "changeFont") {
    return { ...state, fontName: action.font };
  }
  if (action.type === "changeItalic") {
    return { ...state, isItalic: action.italic };
  }
  return state;
};

let theStore = createStore(
  reducer,
  {}, // Initially the store of the state is an empty object
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
