import axios from "axios";

/**
 * return the comments by postId from jsonplaceholder API
 * @param {Number} postId Post Id to get the comments
 */
const getComments = (postId) => axios.get('https://jsonplaceholder.typicode.com/comments', {
    params: { postId }
}
);

export default getComments;