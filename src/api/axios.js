// utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Add token from localStorage before each request
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = JSON.parse(localStorage.getItem("user"));
    console.log("Token from localStorage:", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token.token}`;
    }
  }
  return config;
});

export default api;
