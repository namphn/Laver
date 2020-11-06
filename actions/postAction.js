import { actionType } from "../constants"
import { useDispatch } from "react-redux"

export function uploadStart() {
    const dispatch = useDispatch();
    return () => {
        dispatch({ type: actionType.UPLOADING });
    };
}

export function uploadEnd() {
    const dispatch = useDispatch();
    return () => {
        dispatch({ type: actionType.UPLOADED })
    }
}

export function uploadProgress(percent) {
    const dispatch = useDispatch();
    return () => {
        dispatch({
            type: actionType.UPLOAD_PROGRESS,
            payload: percent
        })
    }
}


