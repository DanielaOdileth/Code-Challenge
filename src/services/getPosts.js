import axios from "axios"; 

const getPost = () => axios.get('https://jsonplaceholder.typicode.com/posts');

export default getPost;