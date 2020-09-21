import { API } from "../constants"
import {} from "../actions"

axios = require('axios');


function login(email, password){

    axios.post("http://10.128.13.151:8081/user/login", {
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


export {
    login,
};