import axios from 'axios'
// 对axios的封装

export function request (config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: ''
    // timeout: 5000
  })
  // 2.axios拦截器
  instance.interceptors.request.use(config => {
    console.log('request', config)
    return config // 必须return回去，不然就拦截下来了
  }, err => {
    console.log('request err:', err)
  })
  instance.interceptors.response.use(res => {
    console.log('response', res)
    return res.data // return res.data即可
  }, err => {
    console.log(err)
  })

  // 3.发送请求
  return () => instance(config)
  // instance是Promise，在用的时候直接.then .catch就行
}
