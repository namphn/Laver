import { API, status } from "../constants"
import { AsyncStorage } from "react-native"
import { uploadStart, uploadEnd } from "../actions/postAction";

const axios = require("axios");

export async function POST(path, data) {
    const token = await AsyncStorage.getItem("token");
    let options = {
        "Method": "POST",
        headers: {
            "Authorization": "Bearer " + token
        }
    }

    return axios.post(path, data, options);
}

export async function GET(path) {
    const token = await AsyncStorage.getItem("token");
    let options = {
        "Method": "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    }

    return axios.GET(path, options);
}
