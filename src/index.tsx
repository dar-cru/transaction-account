import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// reportWebVitals(console.log);
