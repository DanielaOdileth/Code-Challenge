import React, { useState, useEffect } from "react";
import getPost from "../services/getPosts";

const Posts = () => {
    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        getPost()
            .then(response => setPostsList(response.data))
            .catch(err => console.log('error ---> ', err));
    }, []);


    const list = postsList.map((post) => {
        const { id, title, body, userId } = post;

        return (
            <div key={`post#${id}`} className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-1">
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
            {list}
        </>
    );
}

export default Posts;