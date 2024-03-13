//封装axios
import axios from 'axios'

//创建实例
const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})
export default instance