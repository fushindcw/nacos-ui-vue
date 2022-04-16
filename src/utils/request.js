import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
import { h } from 'vue'

const service = axios.create({
    baseURL: 'http://192.168.100.108:8848/nacos',
    timeout: 3000
})

service.interceptors.request.use((config)=>{
    let token = store.getters.token;
    if(token != undefined){
        config.headers['accessToken'] = token;
    }
    return config;
}, error=>{
    return Promise.reject(error);
})

service.interceptors.response.use(response=>{
    return Promise.resolve(response.data);
}, error=>{
    console.log(error);
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