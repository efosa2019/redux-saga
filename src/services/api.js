import axios from 'axios';
import { apiUrl } from '../constants/endpoints';

const serviceApi = axios.create({
  baseURL: apiUrl
});

export default serviceApi;
