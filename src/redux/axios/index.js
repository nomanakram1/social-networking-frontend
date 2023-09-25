import axios from "axios";

export const MyAxios = axios.create({
  baseURL: process.env.PUBLIC_BASE_URI,
});
