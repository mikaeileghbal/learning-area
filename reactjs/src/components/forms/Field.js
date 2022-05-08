import React, { useState } from "react";

export default function Field({
  name,
  value,
  placeholder,
  onChange,
  validate,
}) {
  const [state, setState] = useState({ value, error: false });

  const change = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const error = validate ? validate(value) : false;

    setState({ value, error });
    onChange({ name, value, error });
  };

  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        value={state.value}
        onChange={change}
      ></input>
      <span style={{ color: "red" }}>{state.error}</span>
    </div>
  );
}
