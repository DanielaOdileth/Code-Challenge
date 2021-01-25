import React, { useState, useEffect } from "react";
import getPost from "../services/getPosts";
import { useHistory } from 'react-router-dom'
import { userImages } from '../utils/userImages';
import Header from "./Header";

const Posts = () => {
    const [postsList, setPostsList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getPost()
            .then(response => setPostsList(response.data))
            .catch(err => console.log('error ---> ', err));
    }, []);

    const handleOnClick = (post) => {
        history.push({
            pathname: '/comments',
            state: { post }
        });

    }

    const list = postsList.map((post) => {
        const { id, title, body, userId } = post;
        const randomUserImage = Math.floor((Math.random() * ((1 + 1) - 0)) + 0);
        return (
            <div key={`post#${id}`} className="card" onClick={() => { handleOnClick(post) }}
                style={{
                    cursor: "pointer",
                    backgroundColor: "aliceblue",
                    border: "solid 2px gray",
                    margin: "10px",
                    borderRadius: "30px"
                }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-1">
                            <img
                                src={userImages[randomUserImage]}
                                alt="user"
                                className="img-thumbnail"
                                width="150"
                                height="200"
                            />
                        </div>
                        <div className="col-sm">
                            <h5 className="card-title">{title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">User #: {userId}</h6>
                            <p className="card-text">{body}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <>
            <Header />
            {list}
        </>
    );
}

export default Posts;