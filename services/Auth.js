import { API } from "../constants"
import {} from "../actions"

axios = require('axios');


function login(email, password){

    axios.post("https://f5cfbdf56a6d.ngrok.io/user/login", {
        email: email,
        password: password
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}


export const Auth = {
    login,
}