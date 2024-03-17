//这里统一管理所有接口
import axios from '../utils/request'

//获取新闻列表
export const getNews = (params) => axios.get('/v1/example/index', {
    params: params,
})
//获取新闻详情
export const getNewsDetail = (params) => axios.get('/v1/example/show', {
    params: params,
})
