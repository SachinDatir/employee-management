// import axios from "axios";
// import { API_URL } from "./config";
import { axiosSimulator } from "./axios-simulator";

// const apiAxios = axios.create({ baseURL: API_URL });

const apiAxios = axiosSimulator;

export default apiAxios;
