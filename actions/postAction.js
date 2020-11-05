import { actionType } from "../constants"

export function uploadStart() {
    return{ type: actionType.UPLOADING };
}

export function uploadEnd() {
    return{ type: actionType.UPLOADED };
}

export function uploadProgress(percent) {
    return {
        type: actionType.UPLOAD_PROGRESS,
        payload: percent
    }
}

 
