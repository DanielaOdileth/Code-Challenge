import React from "react";
import ReactDOM from "react-dom";
import Comments from '../components/Comments/Comments';
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom';
import { render, waitFor, cleanup } from '@testing-library/react';
import mockedAxios from 'axios';

afterEach(cleanup);

jest.mock('axios');

test('render comments with mocking axios request', async () => {
    const data = {
        data: [
            {
                id: "Post1",
                name: "test name",
                email: "email@test.com",
                body: "body test"
            },
            {
                id: "Post2",
                name: "test name2",
                email: "email2@test.com",
                body: "body test 2"
            },
            {
                id: "Post3",
                name: "test name3",
                email: "email3@test.com",
                body: "body test 3"
            }]
    };
    mockedAxios.get.mockResolvedValueOnce(data);
    const { getByText } = render(<Comments />);
    await waitFor(() => expect(getByText('email3@test.com')));
});

test('testing mocking axios comments request is empty', async () => {
    const data = {
        data: [ ]
    };
    mockedAxios.get.mockResolvedValueOnce(data);
    const { queryAllByText } = render(<Comments />);
    await waitFor(() =>expect(queryAllByText('Email: ')).toHaveLength(0));
});

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