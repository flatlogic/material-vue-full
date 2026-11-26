import axios from 'axios';
import config from './config';

const api = axios.create({ baseURL: config.baseURLApi });
const apiOrigin = new URL(config.baseURLApi, window.location.origin).origin;

api.interceptors.request.use(request => {
  if (!config.isBackend) {
    throw new axios.CanceledError('This action requires the API-enabled dashboard.');
  }
  const token = localStorage.getItem('token');
  if (token && new URL(api.getUri(request), window.location.origin).origin === apiOrigin) {
    request.headers.set('Authorization', 'Bearer ' + token);
  }
  return request;
});

export default api;
