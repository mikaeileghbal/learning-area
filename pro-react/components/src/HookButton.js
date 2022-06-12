import React, { useState } from "react";

export default function HookButton(props) {
  const [counter, setCounter] = useState(0);
  const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);

  const handleClick = () => {
    setCounter(5);
    setHasButtonBeenClicked(true);
    props.onIncrement(1);
    props.onPromote();
  };

  return (
    <button onClick={handleClick} className={props.className}>
      {props.text} {counter}
    </button>
  );
}
