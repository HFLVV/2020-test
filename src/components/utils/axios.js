import Axios from "axios"
Axios.interceptors.request.use(
    config => {
    
      if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        config.headers.Authorization = token;
      }
      // sratload();
      return config;
    },
    err => {
      return Promise.reject(err);
    });
  
  // http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
  Axios.interceptors.response.use(
    response => {
      // if (response.status == 200 || response.status == 201){  
      //   endload();
      // }
  
      return response;
    },
    error => {
      if (error.response) {
        console.log(error.response.status)
        if(error.response.status == 401){
          alt.error("登陆失效,请重新登录!");
          localStorage.removeItem('token');
          setTimeout(function () {
            location.href = '/index.html';
          }, 2000);
  
        }
      }
      // return Promise.reject(error.response.data)
    });