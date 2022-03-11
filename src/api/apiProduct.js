import {apiInstance} from "./api";

export const getProductApi = (callback) => {
    apiInstance().get("/product").then(response => {
        const data = response.data
        callback(true,data)
    }).then(error => {
        callback(false,error)
    })
}

export const getSingleProductApi = (id,callback) => {
    apiInstance().get("/product/"+id).then(response => {
        const data = response.data
        callback(true,data)
    }).then(error => {
        callback(false,error)
    })
}