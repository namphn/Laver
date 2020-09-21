import { useDispatch } from 'react-redux'
import { actionType } from "../constants"

export function logOutDispatch(){
    useDispatch({ type: actionType.LOGOUT })
}

export function logInDispatch(token){
    useDispatch(
        {
            type: actionType.LOGIN,
            payload: {
                token: token
            }
        })
}

