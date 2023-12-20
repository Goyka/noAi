import axios from "axios";

const api = axios.create({
  baseURL: "https://prac.dev/api",
});
export default api;
