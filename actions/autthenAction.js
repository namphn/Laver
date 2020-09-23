
import { actionType } from "../constants"

export function logOutDispatch() {
    useDispatch({ type: actionType.LOGOUT })
}

export function logInDispatch() {
    console.log("loginDispatch")
    useDispatch(
        {
            type: actionType.LOGIN,
        })
}

