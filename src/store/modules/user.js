import {login} from '@/api/user'
import router from '@/router'
import {setToken, getToken,setUser, getUser} from '@/utils/auth'
const state = {
    token: getToken(),
    username: getUser()
}

const mutations = {
    SET_USERINFO: (state, userInfo)=>{
        console.log(userInfo.accessToken)
        setToken(userInfo.accessToken);
        setUser(userInfo.username);
    }
}

const actions = {
    userLogin({commit},loginInfo){
        login(loginInfo).then(userInfo=>{
            commit('SET_USERINFO', userInfo);
            router.push('/')
        })
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}