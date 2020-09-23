import { API, status } from "../constants"
import {
    logInDispatch,
    logOutDispatch
} from "../actions/autthenAction"
import { AsyncStorage } from "react-native"


const axios = require('axios');

export async function login(email, password) {
    let response = await axios.post(API.root + API.user.login, {
        email: email,
        password: password
    })
        .then(function (response) {
            console.log(response.data.status)
            if (response.data.status == status.ACCEPT) {
                AsyncStorage.setItem(
                    "token",
                    response.data.token
                );
                console.log('asd')
                logInDispatch();
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
    return response;
}
