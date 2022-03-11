import axios from "axios";

export const apiInstance = () => {
    return axios.create({
        baseURL: "http://localhost:4000",
        headers: {
            API_KEY: "CMDKCDNCJNDJCJN"
        }

    })

}
