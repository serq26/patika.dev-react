import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

it("should render emoji list", () => {
  render(<App />);
  const emoji = screen.getByText(/Joy/i);
  expect(emoji).toBeInTheDocument();
});
