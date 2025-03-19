import axios from "axios";

const client = axios.create({
  baseURL: `${import.meta.env.VITE_URL_BASE}/api`,
});

export default client;
