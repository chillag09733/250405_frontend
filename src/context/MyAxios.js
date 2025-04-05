import axios from "axios";

export const MyAxios = axios.create({
    baseURL: "http://127.0.0.1:800/api"
});