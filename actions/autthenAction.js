import { actionType } from "../constants"

export function logOutAction() {
    return{ type: actionType.LOGOUT };
}

export function loginAction () {
    console.log("login action")
        return ({
            type: "LOGIN",
        })
}

