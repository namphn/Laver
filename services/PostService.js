import { API, status } from "../constants"
import { AsyncStorage } from "react-native"
import { uploadStart, uploadEnd } from "../actions/postAction";
import { GET } from './PostWithToken'

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

export async function getPostList(userId) {
    let path = API.root + API.posts.post + "/" + userId;
    console.log("path get new:", path)
    let data = GET(path)
        .then(response => {
            if (response.data.status == status.SUCCESS) {
                return response.data.data;
            }
            else return null;
        })
        .catch(exception => {
            console.log(exception)
            return null;
        })

        return data;
}
