import { actionType } from "../constants"   
import { AsyncStorage } from "react-native"

const currenUser = (state, action) => {
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

export default currenUser;
