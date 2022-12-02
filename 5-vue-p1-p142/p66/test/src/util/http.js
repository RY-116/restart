// 封装axios
import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16680650034926490697269249"}'
  }
})
// 在发请求之前拦截
// http是因为之前实例化的就是http，否则就用axios就行
http.interceptors.request.use(config => {
  // 可以在这里为请求附加信息比如加请求头，config是请求的所有内容
  // 当然也可以干别的事情比如设置loading框
  Toast.loading({
    message: '加载中',
    forbidClick: true,
    duration: 0
  })
  return config
}, error => {
  return Promise.reject(error)
})

// 在收到响应后拦截
// 注意这个显然是先于.then(res => {})的
http.interceptors.response.use(response => {
  // 显然，resopnse是接收到的数据，在这里可以统一给里面加点东西
  // 不过我们这里只是用来消除loading框
  Toast.clear()
  return response
}, error => {
  // 不管成功失败都消除
  Toast.clear()
  return Promise.reject(error)
})

export default http
