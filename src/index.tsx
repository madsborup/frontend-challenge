import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from './utils/history'
import { store } from "./store";
import { GlobalStyle } from "./utils/globalStyle";
import Routes from "./Routes";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router >
  </Provider>,
  document.getElementById("root")
);
