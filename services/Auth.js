import { API, status } from "../constants"
import { AsyncStorage } from "react-native"

const axios = require('axios');

export function loginApi(email, password) {
    let response = axios.post(API.root + API.user.login, {
        email: email,
        password: password
    })
        .then(function (response) {
            console.log(response.data);
            if (response.data.status == status.ACCEPT) {
                AsyncStorage.setItem(
                    "token",
                    response.data.data.token
                );
                return response.data.status;
            }
            if (response != null) return response.data.status;
        })
        .catch(function (error) {
            return status.error;
        });
    return response;
}

export async function sigupApi(email, password, name) {
    const apiUrl = API.root + API.user.sigup;
    let response = await axios.post(apiUrl, {
        email: email,
        password: password,
        name: name
    })
        .then(function (response) {
            console.log(response.data)
            return response.data.status;
        })
        .catch(function (error) {
            return status.ERROR.header;
        });
    return response;
}

export async function logOut() {
    await AsyncStorage.removeItem("token");
}
