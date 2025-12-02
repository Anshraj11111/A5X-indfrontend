// frontend/src/utils/axiosClient.js
import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true, // 👈 important if you use cookies / sessions
});

// attach token on every request
client.interceptors.request.use((config) => {
  const token = localStorage.getItem("a5x_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default client;
