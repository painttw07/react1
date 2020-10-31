import axios from 'axios';

const api = axios.create({ baseURL: 'https://testehygia.herokuapp.com/api' });

export default api;