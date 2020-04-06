import axios from 'axios';

export default axios.create({
  baseURL: 'https://cinema-tickets.herokuapp.com/api',
});
