import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api",
    // withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        // "Accept": "application/json",
    },
})

export default api;
