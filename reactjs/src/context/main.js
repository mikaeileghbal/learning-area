import React, { createContext } from "react";
import Consumer from "./consumer";
import * as data from "./data";

const colors = data.getColors();

export const ColorContext = createContext();

export default function Main() {
  return (
    <ColorContext.Provider value={{ colors }}>
      <div>
        <h1>Using Context</h1>
        <Consumer />
      </div>
    </ColorContext.Provider>
  );
}
