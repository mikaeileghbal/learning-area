import React from "react";

export default function TodoRow({ item, toggleTodo }) {
  return (
    <tr>
      <td>{item.action}</td>
      <td>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => toggleTodo(item)}
        ></input>
      </td>
    </tr>
  );
}
