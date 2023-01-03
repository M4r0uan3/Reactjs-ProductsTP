import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:1337",
  headers: { "content-type": "application/json" },
});

export default http;
