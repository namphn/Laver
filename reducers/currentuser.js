import { actionType } from "../constants"

const initialState = [{loggedIn: false}]

const currenUser = (state = initialState, action) => {
    console.log("reducer")
    switch (action.type) {
        case actionType.LOGIN:
            return {
                loggedIn: true
            }

        case actionType.LOGOUT:
            return {
                loggedIn: false
            }

        case actionType.REGISTER:
            return {
                loggedIn: false
            }

        default:
            return {
                loggedIn: false
            }
    }
}

export default currenUser;
