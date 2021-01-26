import React from "react";
import ReactDOM from "react-dom";
import Posts from '../components/Posts';

import { cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

afterEach(cleanup);

it("Posts component render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Posts />, div);
});