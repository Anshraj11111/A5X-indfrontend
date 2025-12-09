import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ NO localhost in production
  withCredentials: true,
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("a5x_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
