import React, { useState, useEffect } from "react";
import getPost from "../services/getPosts";
import { useHistory } from 'react-router-dom'

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
        
        return (
            <div key={`post#${id}`} className="card" onClick={() => { handleOnClick(post) }}>
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