import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./reset.css";
import App from "./App";

import "./i18n/i18n";
import Loading from "./Loading";

import { Provider } from "react-redux";
import { store } from "./store/index";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
