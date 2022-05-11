import React, { createContext } from "react";
import ColorProvider from "./color-hooks";
import Consumer from "./consumer";
import * as data from "./data";

export default function Main() {
  return (
    <ColorProvider>
      <div>
        <h1>Using Context</h1>
        <Consumer />
      </div>
    </ColorProvider>
  );
}
