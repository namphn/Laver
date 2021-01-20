import { actionType } from "../constants"
import { AsyncStorage } from "react-native"

const currentUser = (state, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return {
                ...state,
                loggedIn: true,
            }

        case actionType.LOGOUT:
            return {
                ...state,
                loggedIn: false
            }

        case actionType.REGISTER:
            return {
                ...state,
                loggedIn: false
            }

        default:
            return {
                ...state
            }
    }
}

const userInformationReducer = (state, action) => {
    switch (action.type) {
        case actionType.SET_USER_INFO:
            return {
                ...state,
                username: action.payload.userName,
                avatar: action.payload.userAvatar
            }

        case actionType.SET_USERNAME:
            return {
                ...state,
                userName: action.payload
            }

        case actionType.SET_USER_AVATAR:
            return {
                ...state,
                userAvatar: action.payload
            }

        case actionType.SET_USERID:
            return {
                ...state,
                userId: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export {
    currentUser,
    userInformationReducer
};
