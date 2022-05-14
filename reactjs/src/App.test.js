import { render, screen } from "@testing-library/react";
import App from "./App";
import { timesTwo } from ".App/";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Multiplies by two", () => {
  expect(timesTwo(4)).tobe(8);
});
