import { API, status } from "../constants"
import { AsyncStorage } from "react-native"

const axios = require("axios");

export async function postToNewsFeed(data) {
    console.log("vao");
    let token = await AsyncStorage.getItem("token");
    let path = API.root + API.posts.post;
    console.log(path)
    let response = fetch(path, data,
        {
            "Method": "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + token
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error)
        });
    return response;
}