import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { timesTwo } from ".App/";
import { toHaveAttribute } from "@testing-library/jest-dom";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("Multiplies by two", () => {
//   expect(timesTwo(4)).tobe(8);
// });

// test("render a star", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<p id="paraf">Testing...</p>, div);
//   expect(div.querySelector("p")).toHaveAttribute("id", "paraf");
// });
