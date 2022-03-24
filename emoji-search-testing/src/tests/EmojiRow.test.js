import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

it("should filter emoji", () => {
    render(<App />);
    const emoji = screen.getByText(/Joy/i)
    document.execCommand = jest.fn(); 
    userEvent.click(emoji);
    expect(document.execCommand).toBeCalledWith('copy');
    const copyEmoji = window.ClipboardData;
    expect(copyEmoji).toEqual(emoji.value)
});
