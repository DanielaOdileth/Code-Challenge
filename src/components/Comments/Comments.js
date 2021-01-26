import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import getComments from '../../services/getComments';
import Header from "../Header/Header";
import style from '../../App.module.css';
import CommentList from './CommentList';

/**
 * Comments stateful function component, renders a list with all the comments by posts.
 */
const Comments = () => {
    /**
     * useLocation() to get the post's information through the location to get the comments.
     */
    const location = useLocation();

    const [commentsList, setCommentsList] = useState([]);
    const { post } = location.state;
    const { id, title, body, userId } = post;

    useEffect(() => {
        getComments(id)
            .then(response => setCommentsList(response.data))
            .catch(err => console.log(`There was an error to get comments for postId: ${id}. Error: ${err}`));
    }, [id])

    return (
        <>
            <Header showBackButton={true} />
            <div data-testid="card-post-comments" className={`card ${style.cardPostStyle}`}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">User #: {userId}</h6>
                    <p className="card-text">{body}</p>
                </div>
            </div>
            <ul className="list-group" data-test="list-comments">
                <CommentList commentsList={commentsList}/>
            </ul>
        </>
    )
}

export default Comments;