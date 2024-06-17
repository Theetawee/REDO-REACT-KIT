import axios from "axios";
import { api_url } from "./constants";
const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: api_url,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  });


  return axiosInstance


};

export default useAxios;
