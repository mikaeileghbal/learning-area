import React, { Children, cloneElement, useState } from "react";

export default function Composition() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container text-center">
      <h1 className="bg-primary text-center text-white">Composition</h1>
      <div className="m-2 text-center">
        <ThemeSelector>
          <Message theme="primary" message={`Counter: ${counter}`} />
          <ActionButton
            text="Increment"
            theme="secondary"
            callback={incrementCounter}
          />
        </ThemeSelector>
      </div>
    </div>
  );
}

function ActionButton({ text, theme, callback }) {
  return (
    <button className={`btn btn-${theme} m-2`} onClick={callback}>
      {text}
    </button>
  );
}

function Message({ theme, message }) {
  return <div className={`h5 bg-${theme} text-white p-2`}>{message}</div>;
}

function ThemeSelector({ children }) {
  const [theme, setTheme] = useState("primary");
  const themes = ["primary", "secondary", "success", "warning", "dark"];

  const changeTheme = (e) => {
    setTheme(e.target.value);
  };

  let modChildren = Children.map(children, (c) => {
    return cloneElement(c, { theme: theme });
  });

  console.log(modChildren);
  return (
    <div className="bg-dark p-2">
      <div>
        <label>Theme:</label>
        <select value={theme} onChange={changeTheme}>
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-info p-2">{modChildren}</div>
    </div>
  );
}
