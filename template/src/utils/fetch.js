import axios from 'axios'
import { Toast } from 'mint-ui'
import env from './env'

const TIME_OUT = 4000

const fetch = axios.create({
    timeout: TIME_OUT,
    withCredentials: true
})
const fetch_raw = axios.create({
    timeout: TIME_OUT
})

fetch.interceptors.request.use(config => {
    showLoading()
    return config
}, e => {
    return Promise.reject(e)
})

fetch.interceptors.response.use(response => {
    hideLoading()

    var resCode = response.data.code
    if(resCode == 200){
        return response
    }
    else if(resCode == 401){
        gotoLogin()
    }else{
        ToastError()
        return Promise.reject(response)
    }
}, e => {
    hideLoading()
    console.error(e)
    if(e.response && e.response.status == 401){
        gotoLogin()
    }else{
        ToastError()
    }
    return Promise.reject(e)
})
// 显示保险师loading
function showLoading() {
    if (window.appBridge && appBridge.showLoading) {
        appBridge.showLoading()
    }
}
// 隐藏保险师loading
function hideLoading() {
    if (window.appBridge && appBridge.hideLoading) {
        appBridge.hideLoading()
    }
}
function gotoLogin(){
    console.log('onSessionLost')
    if(env.node_env == 'dev') {
        window.location.href = 'login.html'
    } else {
        appBridge.onSessionLost()
    }
}

function ToastError(){
    Toast({
        message: '网络不给力，请稍后再试',
        duration: 5000
    })
}

export { fetch, fetch_raw }