import axios from 'axios';

const api = axios.create({
  baseURL: 'https://joaopaulu-com-br.umbler.net/',
});

export default api;
