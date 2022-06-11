import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Summary from "./Summary";

let names = ["Bob", "alice", "Dore"];

function promote(name) {
  console.log(name);
}

let [, second, ...rest] = names;
console.log(second);
console.log(rest);

const App = () => {
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">Hello Adam</h1>
      <Message name="Mikaeil" />
      <Message />
      <Message />
      <Summary names={["Bob", "Alice", "Dore"]} />
      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Letters</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name, index) => (
            <tr key={name}>
              <Summary name={name} index={index} promote={promote} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
