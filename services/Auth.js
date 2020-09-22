import { API, status } from "../constants"
import {
    logInDispatch,
    logOutDispatch
} from "../actions/autthenAction"
import {AsyncStorage} from "react-native"


const axios = require('axios');

export function login(email, password) {
    let response = axios.post(API.root + API.user.login, {
        email: email,
        password: password
    })
        .then(function (response) {

            if (response.data.status == status.ACCEPT) {
                AsyncStorage.setItem(
                    "token",
                    response.data.token
                );
                logInDispatch(response.data.token);
                return response.data.status;
            }
            if (response != null) return response.data.status;
        })
        .catch(function (error) {
            return status.error;
        });

    return response;
}

export async function sigup(email, password, name) {
    const apiUrl = API.root + API.user.sigup;

    let response = await axios.post(apiUrl, {
        email: email,
        password: password,
        name: name
    })
        .then(function (response) {
            return response.data.status;
        })
        .catch(function (error) {
            return status.ERROR;
        });
    console.log(response)
    return response;
}
