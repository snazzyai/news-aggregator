import axios from "axios";

const NEWS_API_BASE_URL = import.meta.env.NEWS_API_BASE_URL;

export const NEWS_API = axios.create({
  baseURL: NEWS_API_BASE_URL,
});
