import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.23.109.33:3333/',
})

export default api