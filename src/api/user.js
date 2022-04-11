import {FORM_POST} from '@/utils/request.js'

export const login = (loginInfo)=>{
    return new Promise((resolve)=>{
        FORM_POST('v1/auth/users/login', loginInfo).then(data=>{
            console.log(data);
            window.localStorage.setItem("userInfo", data);
            resolve(true);
        })
    });
}