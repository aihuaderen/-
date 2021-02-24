//axios 二次封装
import axios from 'axios'
import qs from 'querystring'


// 1.配置通用的基础路径和超时
const service = axios.create({
    baseURL: '/api', //基础路径
    timeout: 2000 //超时时间
})

//添加请求拦截器
service.interceptors.request.use((config) => {

    //axios中默认发送的格式是json,但目前的服务器没有对json格式的请求参数做处理，所以需要转换为urlencoded编码格式
    config.data = qs.stringify(config.data);
    //必须返回config
    return config //后面就会根据返回的config, 使用xhr对象发ajax请求
})

//添加响应拦截器
service.interceptors.response.use(
    response => {

        //成功返回的数据不再是response,而是直接是响应体数据response.data
        return response.data
    },
     
    error => {

        //统一处理请求错误,具体请求也可以选择处理或不处理
        alert(error.message || '未知的请求错误')

        return Promise.reject(error)
    }
)


//向外暴露 service
export default service