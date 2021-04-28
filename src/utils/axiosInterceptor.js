import axios from 'axios';

let headers = {
    'Content-Type' : 'application/json'
};

if(localStorage.token){
    headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async config => {
    config.headers = headers;
    console.log(config);
    return config;
  },
  error => {
    Promise.reject(error)
});

export default axiosApiInstance;