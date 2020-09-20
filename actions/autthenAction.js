import { useDispatch } from 'react-redux'
import { actionType } from "../constants"

const dispatch = useDispatch()

function logOut(){
    dispatch({ type: actionType.LOGOUT })
}

function logIn(token){
    dispatch(
        {
            type: actionType.LOGIN,
            payload: {
                token: token
            }
        })
}

export {
    logIn,
    logOut
}