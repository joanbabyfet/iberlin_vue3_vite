//封装axios
import axios from 'axios'

//创建实例
const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API, //api前缀
    timeout: 15000, //15秒
})
//请求拦截器
instance.interceptors.request.use(
    config => {
        //config.headers['Authorization'] = 'Bearer ' + Cookies.get( 'access_token')
        console.log('请求参数:', config) //打印日志
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//响应拦截器
instance.interceptors.response.use(
    response => {
        console.log('返回结果:', response) //打印日志
        return response.data
    },
    error => {
        console.log('返回错误:', error) //打印日志
        return Promise.reject(error)
    }
)
export default instance