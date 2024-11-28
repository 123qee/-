import axios from "axios";

const config = {
  baseURL: "http://127.0.0.1:3007/api", // api的base URL
  timeout: 10000, // 设置请求超时时间
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded' // 传输数据类型
    'Content-Type': 'application/x-www-form-urlencoded' 
  },
};


// 创建axios实例
const axiosInstance = axios.create(config)

export {
    axiosInstance,
    config
}