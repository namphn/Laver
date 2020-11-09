import { actionType } from "../constants"

const postState = (state, action) => {
    console.log(state)
    switch (action.type) {
        case actionType.UPLOADING:
            return {
                ...state,
                postUploading: true
            }

        case actionType.UPLOADED:
            return {
                ...state,
                postUploading: false
            }
        
        case actionType.UPLOAD_PROGRESS:
            return {
                ...state,
                postUploading: true,
                loadingPercent: action.payload
            }

        default:
            return {
                ...state,
            }
    }
}

export default postState;
