import { actionType } from "../constants"   

const currenUser = (state, action) => {
    console.log(state); 
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
                ...state
            }
    }
}

export default currenUser;
