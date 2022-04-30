import axios from 'axios'
import router from '../router/index'
import Vue from 'vue';
import { Toast } from 'vant';
import qs from 'qs'

Vue.use(Toast);

let token = '';
// 基础路径
// axios.defaults.baseURL = 'http://localhost:3000'//本地地址
axios.defaults.baseURL = 'https://netease-cloud-music-api-five-alpha-64.vercel.app'//vercel上的地址


axios.defaults.headers.post['Content-Type'] = 'application/json';//配置请求头

// http request拦截器 添加一个请求拦截器
// axios.interceptors.request.use(function (config) {
//     let token = localStorage.getItem("token")
//     if (token) {
//       //将token放到请求头发送给服务器,将token放在请求头中
//       config.headers['Authorization'] = token
//     }
//   return config;
// }, function (error) {
//   Toast.fail('请求超时');
//   // Do something with request error
//   return Promise.reject(error);
// });
// // // 添加一个响应拦截器
// axios.interceptors.response.use(function (response) {
//     // if (response.data && response.data.code) {
//     //   if (response.data.message === 'token失效' || response.data.message === '请求头中没有token') {
//     //     //未登录
//     //     Toast.fail("登录信息已失效，请重新登录");
//     //     router.push('/login');
//     //   }
//     //   if (parseInt(response.data.code) === -1) {
//     //     Toast.fail("请求失败");
//     //   }
//     // }
//     return response;
//   }, function (error) {
//     Toast.fail("服务器连接失败");
//     return Promise.reject(error);
//   })
/**
  get方式请求
*/

export function get(url, params) {
  Toast.loading({
    duration: 0, // 持续展示 toast
    forbidClick: true,
    message: '加载中...',
  });
  return new Promise((resolve,reject) =>{
    axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      withCredentials: true,
    }).then(res =>{
      Toast.clear()
      resolve(res)
    })
  })   
}

  /**
   * 提交post请求 发送的数据为查询字符串，key=val&key=val
  */
  export function post(url, data) {
    return axios({
      method: "post",
      url,
      data: qs.stringify(data),
      timeout: 5000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }