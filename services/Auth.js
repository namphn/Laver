import { API, status } from "../constants"
import {
    logInDispatch,
    logOutDispatch
} from "../actions/autthenAction"
import { AsyncStorage } from "react-native"
import { useDispatch } from "react-redux"
import {loginAction} from "../actions/autthenAction"

const axios = require('axios');

export function login(email, password) {
    const dispatch = useDispatch();
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
                console.log(response.data)
                dispatch(loginAction);
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
