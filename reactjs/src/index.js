import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Virtualize from "./components/virtualized-list/Virtualize";
import Main from "./context/main";
import Query from "./graphql/query";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById("bigData"));
root2.render(<Virtualize />);

const contextRoot = ReactDOM.createRoot(document.getElementById("context"));
contextRoot.render(<Main />);
