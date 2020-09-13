import { actionType } from "../constants"

const initialState = []

const currenUser = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }

        case actionType.LOGOUT:
            return {
                ...state,
                user: {},
                loggedIn: false
            }

        case actionType.REGISTER:
            return {
                ...state,
                user: {},
                loggedIn: false
            }

        default:
            return {
                ...state,
                user: {},
                loggedIn: false
            }
    }
}

export default currenUser;
