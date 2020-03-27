import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { GlobalStyle } from "./utils/globalStyle";
import Routes from "./Routes";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
