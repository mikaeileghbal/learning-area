import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Summary from "./Summary";

const App = () => {
  // return React.createElement("h1", { className: "bg-promary" }, "Hello adam");
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">Hello Adam</h1>
      <Message name="Mikaeil" />
      <Message />
      <Message />
      <Summary names={["Bob", "Alice", "Dore"]} />
    </div>
  );
};

export default App;
