import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { loremIpsum } from "lorem-ipsum";
import "./index.css";
import App from "./App";
import reducer from "./reducer";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(
  reducer,
  {
    style: {
      backgroundColor: "#fff",
      color: "#000",
      fontStyle: "normal",
      fontFamily: "sans-serif"
    },
    text: loremIpsum({ count: 3 })
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
