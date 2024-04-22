//这里统一管理所有接口
import request from '../utils/request'

//获取首页新闻列表
export const getHomeNews = (params, headers) => {
    return request.get('/v1/home_article', {params: params}, { headers })
}

//获取新闻列表
export const getNews = (params, headers) => {
    return request.get('/v1/article', {params: params}, { headers })
}

//获取新闻详情
export const getNewsInfo = (params, headers) => {
    return request.get('/v1/article/detail', {params: params}, { headers })
}

//提交联络我们表单
export const submitContactForm = (params, headers) => {
    return request.post('/v1/feedback', params, { headers })
}
