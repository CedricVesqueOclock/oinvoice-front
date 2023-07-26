import axios from "axios"

export const getToken = function(){
    return localStorage.getItem('token')
}

export const getAPI = function(){
    const token = getToken()
    const headers = {}

    if(token){
        headers.Authorization = `Bearer ${token}`
    }

    return axios.create({
        baseURL: "http://localhost:3000/",
        headers
    })
}

export const logout = function(){
  localStorage.removeItem('token')
  localStorage.removeItem('expireAt')
}