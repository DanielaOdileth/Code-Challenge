import React from "react";
import ReactDOM from "react-dom";
import Comments from '../components/Comments';

import { cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

afterEach(cleanup);
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), 
    useLocation: () => ({
        pathname: '/',
        state: {
            "post": {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        }
    }),
    useRouteMatch: () => ({ url: '/comments' }),
}));

it("Comments component render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Comments />, div);
});