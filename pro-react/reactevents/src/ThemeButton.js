import React from "react";

export default function ThemeBUtton({ theme, callback }) {
  const handleClick = (event, capturePhase = false) => {
    console.log(`ThemeButton : type: ${event.type}`);
    console.log(`Target : ${event.target.tagName}`);
    console.log(`Current target: ${event.currentTarget.tagName}`);
    if (capturePhase) {
      console.log("skipped function prop: capture phase");
    } else if (event.bubbles && event.target !== event.currentTarget) {
      console.log("skipped function prop: bubble phase");
    } else {
      console.log("Invoked function prop");
      callback(theme);
    }
  };

  return (
    <span
      className="m-1 bg-light"
      onClick={handleClick}
      onClickCapture={(e) => handleClick(e, true)}
    >
      <button className={`btn btn-${theme}`} onClick={handleClick}>
        Select theme
      </button>
    </span>
  );
}
