import axios from 'axios'

axios.defaults.timeout = 20000
axios.defaults.baseURL = 'http://localhost:8085/ttms-javaweb'
axios.defaults.withCredentials = true

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.transformRequest = [JSONtoString]
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.transformRequest = [JSONtoString]
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {

  if (response.data.style == 1) {
    return Promise.resolve(response.data.data)
  } else {
    return Promise.reject(response.data)
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  send: function (url, type, msg) {
    return axios[type.toLowerCase()](url, msg)
  }
}

function JSONtoString (data) {
  let array = []
  for (let item in data) {
    array.push(item + '=' + data[item])
  }
  return array.join('&')
}
