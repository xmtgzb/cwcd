// axios实例配置

import axios from 'axios';
import Cookies from 'js-cookie';   //引入cooking文件
import { Loading, MessageBox } from 'element-ui';


let loading;

//使用Element loading-start 方法
function startLoading() {

  loading = Loading.service({
    lock: true,
    background: 'rgba(0,0,0,0)',
    fullscreen: false,
    target: '#app'
  })
}

//使用Element loading-close 方法
function endLoading() {
  loading.close()
}

const service = axios.create({
  baseURL: 'http://xxxx.xxxxxxxxx.com/',    //请求的公共地址
  timeout: 5000,                           // 请求超时时间
  headers: { 'Content-Type': 'application/json; charset=UTF-8' }, //请求头
  redirect: 'follow',
  mode: "cors",
  credentials: 'cors'
});


//  设置axios请求拦截器
service.interceptors.request.use(config => {

  // 每次请求判断cook是否过期，针对需要登录的项目
  let cookieflag = window.location.href.indexOf('login')   //判断是否为登录页
  if (cookieflag == -1) {
    let coohieinfo = Cookies.get('cookname')
    if (coohieinfo == 'victory') {
      Cookies.set('cookname', 'victory', { expires: 1 / 24 });
    } else {

      MessageBox({
        title: '温馨提示',
        message: '登录信息过时，请重新登录',
        center: true

      }).then(() => {
        window.location.href = window.location.origin + window.location.pathname + '#/login'
      })
      return
    }
  }


  startLoading()

  return config

}, error => {
  Promise.reject(error)
})

//  设置axios响应拦截器
service.interceptors.response.use(response => {

  endLoading()
  if (response.data.msg && response.data.msg != '') {
    MessageBox({
      title: '温馨提示',
      message: response.data.msg,
      center: true

    })
  }
}, error => {
  endLoading()
  Promise.reject(error)
})


axios.interceptors.response.use(response => {
  return response
},function(error){
  if(error.response.data.status === 401 || error.response.data.status === 304){
    window.location = '/login'
  }else {
    Promise.reject(error)
  }
})

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default service