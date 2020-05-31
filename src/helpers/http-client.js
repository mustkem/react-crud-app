import axios from "axios";
import config from "../config";

const httpInstance = axios.create({
  baseURL: config.API_URL,
});

export default httpInstance;
