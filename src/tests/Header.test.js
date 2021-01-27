import React from "react";
import ReactDOM from "react-dom";
import Header from '../components/Header/Header';

import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

afterEach(cleanup);

it("Header component render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
});

it("renders Back button correctly", () => {
    const { getByTestId } = render(<Header showBackButton={true} />)
    expect(getByTestId('backLabel')).toHaveTextContent("Back");
});

it("renders Random Post label correctly", () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('postLabel')).toHaveTextContent("Random Posts");
});