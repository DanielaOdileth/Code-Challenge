import React from 'react';
import { userImages } from '../../utils/userImages';

/**
 * CommentList stateful function component renders a list with all the comments by posts.
 */
const CommentList = (props) => {
    const { commentsList } = props;

    const commentsListElements = commentsList.map(comment => {
        const { id, name, email, body } = comment;
        /**Getting random number between 0 and 1 to get an image form userImages array */
        const randomUserImage = Math.floor((Math.random() * ((1 + 1) - 0)) + 0);

        return (
            <li key={`comment#${id}`} className="list-group-item" style={{ margin: "1%", border: "outset" }}>
                <div className="card" style={{ border: 'none' }}>
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
                                <p>{name}</p>
                                <p>
                                    <b>Email: </b>
                                    {email}
                                </p>
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
            {commentsListElements}
        </>
    );
}

export default CommentList;