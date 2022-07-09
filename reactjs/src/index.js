import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Virtualize from "./components/virtualized-list/Virtualize";
import GithubApp from "./incorporatingData/GithubApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById("bigData"));
root2.render(<Virtualize />);

const rootGithubUser = ReactDOM.createRoot(
  document.getElementById("githubUser")
);
rootGithubUser.render(<GithubApp />);
