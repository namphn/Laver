import { API, status } from "../constants"
import { POST, GET } from "./PostWithToken";

const axios = require('axios');

export async function getUserProfile(userId) {
    const path = API.root + API.user.getInfo + userId;
    let userInfo = await GET(path).then(response => {
        if(response.data.status == status.SUCCESS) {
            return response.data.data;
        }
        else return null;
    }).catch(e => {
        return null;
    })
    
    return userInfo;
}


