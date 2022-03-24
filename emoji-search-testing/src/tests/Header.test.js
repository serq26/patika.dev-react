import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../Header";

it("should header component render", () => {
    render(<Header/>);
    const title = screen.getByText("Emoji Search");
    expect(title).toBeInTheDocument();
});
