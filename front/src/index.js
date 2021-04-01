import React from "react";
import ReactDOM from "react-dom";
/* import { BrowserRouter } from "react-router-dom"; */
import "./utils/styles.css";
import Index from "./containers/Index";

import { Provider } from "react-redux";
import store from "./state/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
      <Index />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
