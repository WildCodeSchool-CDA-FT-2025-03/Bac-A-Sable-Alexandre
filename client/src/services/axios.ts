import axios from "axios";

const client = axios.create({
  baseURL: `https://localhost:3001/api`,
});

export default client;
