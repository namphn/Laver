import { API, status } from "../constants"
import {
    logInDispatch,
    logOutDispatch
} from "../actions/autthenAction"


const axios = require('axios');

export function login(email, password) {
    axios.post(API.root + API.user.login, {
        email: email,
        password: password
    })
        .then(function (response) {
            try {
                AsyncStorage.setItem(
                    "token",
                    response.data.token
                );

                logInDispatch(token);
                return true;

            } catch (error) {
                return false;
            }
        })
        .catch(function (error) {
            return false;
        });
}

export function sigup(email, password, name) {
    const apiUrl = API.root + API.user.sigup;

    axios.post(apiUrl, {
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
}
