import {currentUser, userInformationReducer} from "./currentuser"
import {combineReducers} from "redux"
import postState from "./postreducer"

export default rootReducer = combineReducers({
    currentUser: currentUser,
    postState: postState,
    userInformation: userInformationReducer
})