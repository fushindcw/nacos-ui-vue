import axios from 'axios'
// import { endsWith } from 'core-js/core/string'
import { ElMessage } from 'element-plus'
import { h } from 'vue'

const service = axios.create({
    baseURL: 'http://127.0.0.1:8848/nacos',
    timeout: 3000
})

service.interceptors.request.use((config)=>{
    let userInfo = window.localStorage.getItem('userInfo');
    if(userInfo != undefined){
        config.headers['accessToken'] = userInfo.accessToken;
    }
    return config;
}, error=>{
    return Promise.reject(error);
})

service.interceptors.response.use(response=>{
    return Promise.resolve(response.data);
}, error=>{
    let res = error.response;
    console.log(res);
    if(res.status === 401){
        ElMessage({
            message: h('p', null, [
              h('span', null, res.data),
              h('i', { style: 'color: teal' }, res.data.message),
            ]),
          })
    }else{
        ElMessage({
            message: h('p', null, [
              h('span', null, res.data),
              h('i', { style: 'color: teal' }, res.data.message),
            ]),
          })
    }
    return Promise.reject(error);
})

/**
 * post请求
 * @param {*} uri 
 * @param {*} json 
 * @returns 
 */
export const POST = (uri, json)=>{
    return service({
        method: 'POST',
        url: uri,
        data: json
    });
}

/**
 * 表单请求
 * @param {*} uri 
 * @param {*} formData 
 * @returns 
 */
export const FORM_POST = (uri, formData)=>{
    return service({
        method: 'POST',
        url: uri,
        params: formData
    })
}

/**
 * get请求
 * @param {*} uri 
 * @param {*} params 
 * @returns 
 */
export const GET = (uri, params)=>{
    console.log(uri);
    return service({
        method: 'GET',
        url: uri,
        params: params
    });
}

/**
 * delete请求
 * @param {*} uri 
 */
export const DELETE = (uri)=>{
    return service({
        method: 'DELETE',
        url: uri
    })
}

/**
 * put请求
 * @param {*} uri 
 * @param {*} json 
 */
export const PUT = (uri, json)=>{
    return service({
        method: 'PUT',
        url: uri,
        data: json
    })
}