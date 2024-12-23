import axios from "axios";
import { useRouter } from "next/navigation";

export const http = axios.create({
  baseURL: `/api`,
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (!config.headers.Authorization && token)
    config.headers.Authorization = `Bearer ${token}`;
  if (!config.headers.accept) config.headers.accept = "*/*";
  if (!config.headers["Content-Type"])
    config.headers["Content-Type"] = "application/json*";
  if (!config.headers["Access-Control-Allow-Origin"])
    config.headers["Access-Control-Allow-Origin"] = "*";

  return config;
});

http.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      useRouter().push(`/login`);
    }

    return Promise.reject(error);
  }
);
