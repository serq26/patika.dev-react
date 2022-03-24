import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

it("should filter emoji", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/search emoji/i);
  const emojiName = "Smiley";
  userEvent.type(input, emojiName);
  const filteredEmoji = screen.getByText("Smiley");
  expect(filteredEmoji).toBeInTheDocument();
});
