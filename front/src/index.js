import React from "react";
import ReactDOM from "react-dom";
/* import { BrowserRouter } from "react-router-dom"; */
import "./utils/styles.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import store from "./state/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
