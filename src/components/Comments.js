import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import getComments from '../services/getComments';
import Header from "./Header";

const Comments = () => {
    const location = useLocation();
    const [commentsList, setCommentsList] = useState([]);
    const { post } = location.state;
    const { id, title, body, userId } = post;

    useEffect(() => {
        getComments(id)
            .then(response => setCommentsList(response.data))
            .catch(err => console.log(`There was an error to get comments for postId: ${id}. Error: ${err}`));
    }, [id])

    const commentsListElements = commentsList.map(comment => {
        const { id, name, email, body } = comment;
        return (
            <li key={`comment#${id}`} className="list-group-item" style={{ margin: "1%", border: "outset" }}>
                <div className="card" style={{ border: 'none' }}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm">
                                <p>{name}</p>
                                <p>{email}</p>
                                <p>{body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    });

    return (
        <>
            <Header showBackButton={true} />
            <div className="card" style={{
                backgroundColor: "aliceblue",
                border: "solid 2px gray",
                margin: "10px",
                borderRadius: "30px"
            }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">User #: {userId}</h6>
                    <p className="card-text">{body}</p>
                </div>
            </div>
            <ul className="list-group">
                {commentsListElements}
            </ul>
        </>
    )
}

export default Comments;