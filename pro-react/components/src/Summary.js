import React, { useState } from "react";
import CallbackButton from "./CallbackButton";
import HookButton from "./HookButton";
import SimpleButton from "./SimpleButton";

export default function Summary({ name, index, promote }) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (increment) => {
    setCounter(counter + increment);
  };

  const onClick = (e) => {
    console.log("Clicked...");
  };
  if (String(name).length >= 4) {
    return (
      <>
        <td>{index}</td>
        <td>{name}</td>
        <td>{String(name).length}</td>
        <td>
          <CallbackButton
            theme="info"
            onClick={() => promote(name)}
            text="promote"
          />
          <CallbackButton disabled={true} />
          <CallbackButton disabled="true" />
          <SimpleButton
            className="btn btn-primary btn-sm m-1"
            text={name}
            onPromote={onClick}
            onIncrement={incrementCounter}
          />
          <HookButton
            text="hook"
            onPromote={onClick}
            className="btn btn-warning btn-sm m-1"
            onIncrement={incrementCounter}
          />
          <span>{counter}</span>
        </td>
      </>
    );
  } else {
    return null;
  }
}
