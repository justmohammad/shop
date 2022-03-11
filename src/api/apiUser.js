import {apiInstance} from "./api";

export const getUserApi = (callback) => {
    apiInstance().get("/users").then(response => {
        const data = response.data
        callback(true,data)
    }).then(error => {
        callback(false,error)
    })
}

export const postUserApi = (data) => {
    apiInstance().post("/users",data).then(response => response).catch(error => error)
}