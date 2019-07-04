// axios实例配置


import axios from 'axios';
import cookies from 'js-cookie';


const service = axios.create({
    baseURL: 'http://xxxx.xxxxxxxxx.com/',    //请求的公共地址
    timeout: 5000,                           // 请求超时时间
    headers: {'Content-Type':'application/json; charset=UTF-8'} , //请求头
    redirect:'follow',
    mode: "cors",
    credentials:'cors'    
  });
  

//  设置axios拦截器
service.interceptors.request.use(config => {
    
})


