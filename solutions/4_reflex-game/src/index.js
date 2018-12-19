import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

let reducer = function(state, action) {
  if (action.type === "click") {
    if (state.playerLost) {
      // do nothing
      return state;
    }
    return { ...state, playerWon: true };
  }
  if (action.type === "timesUp") {
    if (state.playerWon) {
      // do nothing
      return state;
    }
    return { ...state, playerLost: true };
  }
  return state;
};

let theStore = createStore(
  reducer,
  { playerLost: false, playerWon: false }, // initial store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
