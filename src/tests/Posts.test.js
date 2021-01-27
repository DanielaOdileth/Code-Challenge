import React from "react";
import ReactDOM from "react-dom";
import Posts from '../components/Posts/Posts';
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom';
import { render, waitFor, cleanup } from '@testing-library/react';
import mockedAxios from 'axios';


afterEach(cleanup);

jest.mock('axios');

test('render post with mocking axios request', async () => {
    const data = {
        data: [
            {
                id: 1,
                title: "test title",
                body: "test body",
                userId: "user1"
            },
            {
                id: 2,
                title: "test title 2",
                body: "test body 2",
                userId: "user2"
            },
            {
                id: 3,
                title: "test title 3",
                body: "test body 3",
                userId: "user3"
            }]
            /**
             * data: [
//             {
//                 id: "Post1",
//                 name: "test name",
//                 email: "email@test.com",
//                 body: "body test"
//             },
//             {
//                 id: "Post2",
//                 name: "test name2",
//                 email: "email2@test.com",
//                 body: "body test 2"
//             },
//             {
//                 id: "Post3",
//                 name: "test name3",
//                 email: "email3@test.com",
//                 body: "body test 3"
//             }]
             */
    };
    mockedAxios.get.mockResolvedValueOnce(data);
    const { getByText } = render(<Posts />);
    await waitFor(() => expect(getByText('test body 3')));
});

test('testing mocking axios posts request is empty', async () => {
    const data = {
        data: [ ]
    };
    mockedAxios.get.mockResolvedValueOnce(data);
    const { queryAllByText } = render(<Posts />);
    await waitFor(() =>expect(queryAllByText('User #')).toHaveLength(0));
});

it("Posts component render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Posts />, div);
});