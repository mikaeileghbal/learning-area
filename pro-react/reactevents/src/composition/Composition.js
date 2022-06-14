import React, { Children, cloneElement, useState } from "react";

export default function Composition() {
  const [counter, setCounter] = useState(0);
  const names = ["Zoe", "Bob", "Alice", "Dora", "Joe"];

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
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <GeneralList list={names} theme="primary" />
            </div>
            <div className="col-6">
              <SpecializedList list={names} />
            </div>
          </div>
        </div>
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
  const [reverseChildren, setReverseChildren] = useState(false);

  const themes = ["primary", "secondary", "success", "warning", "dark"];

  const changeTheme = (e) => {
    setTheme(e.target.value);
  };

  const changeOrder = () => {
    setReverseChildren(!reverseChildren);
  };

  let modChildren = Children.map(children, (c) => {
    return cloneElement(c, { theme: theme });
  });

  if (reverseChildren) {
    modChildren.reverse();
  }

  return (
    <div className="bg-dark p-2">
      <button className={` btn btn-${theme}`} onClick={changeOrder}>
        Reverse
      </button>
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

function GeneralList({ list, theme }) {
  return (
    <div className={`bg-${theme} text-white p-2`}>
      {list.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

function SpecializedList({ list }) {
  const [sort, setSort] = useState(false);

  const getList = () => {
    return sort ? list.sort() : list;
  };

  const toggleSort = () => {
    setSort(!sort);
  };

  return (
    <div>
      <GeneralList theme="info" list={getList()} />;
      <ActionButton theme="primary" text="Sort" callback={toggleSort} />
    </div>
  );
}
