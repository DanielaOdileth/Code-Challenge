import axios from "axios"; 

/**
 * return all the posts from jsonplaceholder API
 */
const getPost = () => axios.get('https://jsonplaceholder.typicode.com/posts');

export default getPost;