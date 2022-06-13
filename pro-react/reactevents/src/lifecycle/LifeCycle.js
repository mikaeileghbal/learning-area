import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function LifeCycle() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    console.log("increment");
    setCounter(counter + 1);
  };

  console.log(`Render App component`);
  return (
    <div className="container text-center">
      <div className="row p-2">
        <h1>LifeCycle</h1>
      </div>
      <div className="row p-2">
        <div className="col-4">
          <Message
            message={`Counter: ${counter}`}
            callback={incrementCounter}
            text="Increment Counter"
          />
        </div>
        <div className="col-4">
          <List />
        </div>
        <div className="col-4">
          <ExternalCunter />
        </div>
      </div>
    </div>
  );
}

function ActionButton({ text, callback }) {
  console.log(`Render ActionButton (${text}) component`);
  return (
    <button className="btn btn-primary m-2" onClick={callback}>
      {text}
    </button>
  );
}

function Message({ text, callback, message }) {
  const [showSpan, setShowSpan] = useState(false);

  const handleClick = (e) => {
    setShowSpan(!showSpan);
    callback(e);
  };

  const getMessageElement = () => {
    const div = (
      <div id="messageDiv" className="h5 text-center p-2">
        {message}
      </div>
    );
    return showSpan ? <span>{div}</span> : div;
  };

  console.log(`Render Message component`);
  return (
    <div>
      <ActionButton theme="primary" text={text} callback={handleClick} />
      {getMessageElement()}
    </div>
  );
}

function List() {
  const [names, setNames] = useState(["Bob", "Alice", "Dora"]);

  const reverseList = () => {
    setNames([...names.reverse()]);
  };

  console.log(`Render List component`);
  return (
    <div>
      <ActionButton callback={reverseList} text="Reverse Names" />
      {names.map((name, index) => {
        return (
          <h5 id={name.toLowerCase()} key={name}>
            {name}
          </h5>
        );
      })}
    </div>
  );
}

let externalCounter = 0;

function ExternalCunter() {
  const [, updateState] = useState({});

  const incrementCounter = () => {
    externalCounter++;
    console.log(externalCounter);
    updateState({});
  };

  return (
    <div>
      <ActionButton callback={incrementCounter} text="External Counter" />
      <div className="h5 text-center p-2">External: {externalCounter}</div>
    </div>
  );
}
