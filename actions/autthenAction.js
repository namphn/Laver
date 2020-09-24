import { actionType } from "../constants"

export function logOutAction() {
    return{ type: actionType.LOGOUT };
}

export const loginAction = () => {
    console.log("login action")
        return ({
            type: "LOGIN",
        })
}

