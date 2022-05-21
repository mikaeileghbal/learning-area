import React, { useState } from "react";

export default function TodoCreator({ createNewItem }) {
  const [newItemText, setNewItemText] = useState("");

  const onInputChange = (e) => {
    setNewItemText(e.target.value);
  };

  const createNewTodo = () => {
    createNewItem(newItemText);
    setNewItemText("");
  };

  return (
    <div className="my-1">
      <input
        className="form-control"
        value={newItemText}
        onChange={onInputChange}
      ></input>
      <button className="btn btn-primary mt-1" onClick={createNewItem}>
        Add
      </button>
    </div>
  );
}
