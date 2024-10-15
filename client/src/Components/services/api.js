// src/services/api.js
import axios from 'axios';

// Use Vite's environment variable for the API base URL
const API_URL = import.meta.env.VITE_API_URL;

// Define your API calls using axios
export const getClients = () => axios.get(`${API_URL}/clients`);
export const getOwners = () => axios.get(`${API_URL}/owners`);
export const getFlats = () => axios.get(`${API_URL}/flats`);
// Add more API calls as needed
