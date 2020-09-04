import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import UserContextProvider from "./contexts/UserContext";
import "./fonts/FontsFree-Net-ir_sans.ttf";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
