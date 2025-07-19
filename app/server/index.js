import axios from "axios";

const axiosInstance = axios.create({
     baseURL:process.env.NEXT_PUBLIC_API_BASE_URL
})


axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  export default axiosInstance