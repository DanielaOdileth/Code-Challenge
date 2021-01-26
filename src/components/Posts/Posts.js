import React, { useState, useEffect } from "react";
import getPost from "../../services/getPosts";
import Header from "../Header/Header";
import PostCards from "./PostCards";

/**
 * Posts stateful function component, to render all the posts from jsonplaceholder API.
 */
const Posts = () => {
    const [postsList, setPostsList] = useState([]);
    useEffect(() => {
        getPost()
            .then(response => setPostsList(response.data))
            .catch(err => console.log(`There was an error to get post ${err}`));
    }, []);

    return (
        <>
            <Header />
            <PostCards postsList={postsList}/>
        </>
    );
}

export default Posts;