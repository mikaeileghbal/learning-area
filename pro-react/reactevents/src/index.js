import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LifeCycle from "./lifecycle/LifeCycle";
import "bootstrap/dist/css/bootstrap.css";
import Composition from "./composition/Composition";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootLifeCycle = ReactDOM.createRoot(document.getElementById("lifecycle"));
rootLifeCycle.render(<LifeCycle />);

const compositionRoot = ReactDOM.createRoot(
  document.getElementById("composition")
);
compositionRoot.render(<Composition />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
