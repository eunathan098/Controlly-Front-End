import axios from 'axios';

const api = axios.create({
  baseURL: 'https://controlly-back-end-production.up.railway.app', 
});

export default api;
