import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserKey = "User"

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setUser(userInfo){
  return Cookies.set(UserKey, userInfo)
}

export function getUser(){
  let username = Cookies.get(UserKey)
  return Cookies.get(UserKey)
}

export function removeUser(){
  return Cookies.remove(UserKey)
}