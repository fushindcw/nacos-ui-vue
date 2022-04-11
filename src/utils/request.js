import axios from 'axios'
// import { endsWith } from 'core-js/core/string'
import { ElMessage } from 'element-plus'
import { h } from 'vue'

const service = axios.create({
    baseURL: 'http://127.0.0.1:8083/',
    timeout: 3000
})

service.interceptors.request.use((config)=>{
    let token = window.localStorage.getItem('token');
    if(token != undefined){
        config.headers['Authorization'] = token;
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
 * get请求
 * @param {*} uri 
 * @param {*} query 
 * @returns 
 */
export const GET = (uri, query)=>{
    if(query != undefined){
        uri += '?'
        for(var key in query){
            uri = uri + key + '=' + query[key] + '&';
        }
        if(uri.endsWith('&')){
            uri = uri.substring(1, uri.length-1);
        }
    }
    console.log(uri);
    return service({
        method: 'GET',
        url: uri
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