// filepath: LB/Frontend/src/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchData = async () => {
  try {
    const response = await API.get('/api/endpoint'); // Replace with your backend API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};