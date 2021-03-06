import axios from 'axios'
import route from '@/router/index'
import { getUrlString } from '@/libs/tools'
import { Notice } from 'view-design';
import { getToken } from '@/libs/util'

class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig() {

        const config = {
            baseURL: splitRouter(),
            // headers: {
            //     Authorization: `Bearer ${getToken()}`
            // }
        }
        return config
    }
    destroy(url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show() // 不建议开启，因为界面不友好
            }
            this.queue[url] = true
            return config
        }, error => {

            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {

            // if (res.data.msg) {
            //     Notice.success({
            //         title: res.data.msg
            //     })
            // }

            this.destroy(url)
            const { data, status } = res
            return { data, status }
        }, error => {
            let errorInfo = error.response
            return Promise.reject(errorInfo)
        })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}
export default HttpRequest