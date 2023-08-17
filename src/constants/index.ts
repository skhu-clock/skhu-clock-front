import axios from 'axios';
const BASE_URL = 'http://skhuclock.duckdns.org';

const Instance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});

Object.freeze(Instance);

export default Instance;
