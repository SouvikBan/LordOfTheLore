import axios from 'axios'

let apiRoot = 'http://127.0.0.1:8080/api/'

let axiosInstance = axios.create({
    baseURL : apiRoot,
});

export default axiosInstance