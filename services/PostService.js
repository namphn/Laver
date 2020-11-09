import { API, status } from "../constants"
import { AsyncStorage } from "react-native"
import { uploadStart, uploadEnd } from "../actions/postAction";

const axios = require("axios");

export async function postToNewsFeed(data) {
    let options = {
        "Method": "POST",
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + token
        },
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor(loaded * 100 / total);
            console.log(percent);
        }
    }

    let path = API.root + API.posts.post;
    let response = axios.post(path, data, options)
        .then(function (response) {
            if (response.data.statusCode === "200") {
            }
        })
        .catch(function (error) {
            console.log(error)
        });
    return response;
}

