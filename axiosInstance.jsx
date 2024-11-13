import axios from "axios";
import { server } from "./server";

// Function to get the latest access token from local storage
const getAccessToken = () => localStorage.getItem('accessToken');

// Function to get the latest refresh token from local storage
const getRefreshToken = () => localStorage.getItem('refreshToken');

// Create a new axios instance
//axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
  baseURL: server,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to update headers before each request
axiosInstance.interceptors.request.use(
  (config) => {
    // Update the Authorization header with the latest access token
    config.headers['Authorization'] = `Bearer ${getAccessToken()}`;
    // Update the Refresh-Token header with the latest refresh token
    config.headers['Refresh-Token'] = getRefreshToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
