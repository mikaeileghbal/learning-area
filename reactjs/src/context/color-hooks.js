import React, { createContext, useContext, useState } from "react";
import { getColors } from "./data";

const data = getColors();
const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(data);

  const addColor = (color, code) => {};

  const removeColor = (id) => {};

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
}
