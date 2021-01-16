import { API, status } from "../constants"
import { POST, GET } from "./PostWithToken";

const axios = require('axios');

export async function getUserProfile(userId) {
    console.log('get user info')
    const path = API.root + API.user.getInfo + userId;
    GET(path).then(response => {
        if(response.data.status == status.SUCCESS) {
            return response.data.data;
        }
        else return null;
    }).catch(e => {
        return null;
    })
}


