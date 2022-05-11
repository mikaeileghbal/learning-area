import React, { useContext } from "react";
import { ColorContext } from "./main";

export default function Consumer() {
  const { colors } = useContext(ColorContext);
  return (
    <div>
      <p>Context Consumer</p>
      <ul>
        {colors.map((color, i) => (
          <li key={i}>
            {color.name} - {color.code}
          </li>
        ))}
      </ul>
    </div>
  );
}
