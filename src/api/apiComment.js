import {apiInstance} from "./api";

export const getCommentApi = (callback) => {
    apiInstance().get("/comments").then(response => {
        const data = response.data
        callback(true,data)
    }).then(error => {
        callback(false,error)
    })
}

export const postCommentApi = (data) => {
    apiInstance().post("/comments",data).then(response => response).catch(error => error)
}