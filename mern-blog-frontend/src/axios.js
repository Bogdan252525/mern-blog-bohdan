import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mern-blog-backend-zk2s.onrender.com',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
