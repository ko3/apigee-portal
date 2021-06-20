import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Menu from "./Menu";
import { Provider } from "react-redux";
import store from "./store/Store";
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <BrowserRouter>
        <div >
          <div >
            <Menu />
            <App />
        </div>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);