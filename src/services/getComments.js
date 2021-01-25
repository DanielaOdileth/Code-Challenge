import axios from "axios";

const getComments = (postId) => axios.get('https://jsonplaceholder.typicode.com/comments', {
    params: { postId }
}
);

export default getComments;