import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log("API_URL:", `${BASE_URL}`);
const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
