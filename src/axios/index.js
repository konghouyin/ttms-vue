import axios from 'axios'

axios.defaults.timeout = 20000
axios.defaults.baseURL  = "http://localhost:8081/ttms"

axios.interceptors.response.use(function(response) {
    if (response.data.style == 1) {
        return response.data.data
    } else {
        return Promise.reject(response.data.msg);
    }
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default {
    send: function(url, type, msg) {
        return axios[type.toLowerCase()](url, msg)
    }
}