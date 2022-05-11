import React, { useContext } from "react";
import { useColors } from "./color-hooks";

export default function Consumer({ onDelete }) {
  const { colors } = useColors();
  return (
    <div>
      <p>Context Consumer</p>
      <ul>
        {colors.map((color, i) => (
          <li key={i}>
            {color.name} - {color.code}
            <button onClick={onDelete}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
