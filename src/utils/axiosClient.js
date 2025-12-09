import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ ONLY THIS
  withCredentials: false, // ✅ IMPORTANT: CORS issue avoid
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("a5x_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
