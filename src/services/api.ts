import axios from 'axios';

const api = axios.create({
  baseURL: 'http://joaopaulu-com-br.umbler.net/',
});

export default api;
