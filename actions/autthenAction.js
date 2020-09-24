import { actionType } from "../constants"

export function logOutAction() {
    return{ type: actionType.LOGOUT };
}

export function loginAction() {
        return {
            type: actionType.LOGIN,
        }
}

