import { actionType } from "../constants"

const initialState = [];

const currenUser = (state = initialState, action) => {
    console.log("reducer")
    switch (action.type) {
        case actionType.LOGIN:
            return {
                ...state,
                loggedIn: true
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
                loggedIn: false
            }
    }
}

export default currenUser;
