// 封装一个axios
import axios from 'axios'
import router from '../router'
import {
    Message
} from 'element-ui'
import JSONBig from 'json-bigint'

// 默认ip
axios.defaults.baseURL = 'http://192.168.1.112:8090'

// 开启携带session
axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem('user-token') // 取token
    config.headers.Authorization = `Bearer ${token}` // 统一注入token
    return config // 表示会用该config请求进行后台操作
}, function (error) {
    Message({
        type: 'warning',
        message: error
    })
})

axios.defaults.transformResponse = [function (data) {
    return data ? JSONBig.parse(data) : {} // 解决js处理大数字失真问题
}]

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 成功时执行该函数 状态码 200 /201 /204

    return response.data ? response.data : {}
}, function (error) {
    // 失败时执行该函数
    let status = error.response.status
    let message = ''
    switch (status) {
        case 400:
            message = '请求参数错误'
            break
        case 507:
            message = '服务器数据库异常'
            break
        case 401:
            // token过期或者失效
            window.localStorage.removeItem('user-token') // 删除过期的token
            router.push('/login') // 跳转到登录页
            break
        default:
            break
    }
    Message({
        type: 'warning',
        message
    }) // 提示信息
    // 错误执行函数 如果不做任何操作 还会进入到promise then中
    return Promise.reject(error) // 只要reject =>catch
})
export default axios
