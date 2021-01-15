import { API, status } from "../constants"
import { POST, GET } from "./PostWithToken";

const axios = require('axios');

export async function getUserInfo(userId) {
    console.log('get user info')
    const path = API.root + API.user.getUserInfo + userId;
    GET(path).then(response => {
        console.log(response.data)
    }).catch(e => {

    })
}


