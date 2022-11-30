import React, { StrictMode } from "react";
// with strict mode react offers additional warnings and checks.
import ReactDOM from "react-dom/client";
// react dom library allows us to basically interact with document object model in the browser
import App from "./App";
import "./index.css";
// our global css file

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
