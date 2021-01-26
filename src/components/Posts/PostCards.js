import React from "react";
import { userImages } from '../../utils/userImages';
import style from '../../App.module.css';
import { useHistory } from 'react-router-dom'

/**
 * PostCards stateful function component, to render cards per each post.
 */
const PostCards = ({ postsList }) => {
    const history = useHistory();

    /** 
 * Redirect to the route /comments when the user click on any post  to show the comments
 */
    const handleOnClick = (post) => {
        history.push({
            pathname: '/comments',
            state: { post }
        });
    }

    const list = postsList.map((post) => {
        const { id, title, body, userId } = post;
                /**Getting random number between 0 and 1 to get an image form userImages array */
        const randomUserImage = Math.floor((Math.random() * ((1 + 1) - 0)) + 0);

        return (
            <div key={`post#${id}`} className={`card ${style.cardPostStyle}`} onClick={() => { handleOnClick(post) }}>
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
            {list}
        </>
    );
}

export default PostCards;