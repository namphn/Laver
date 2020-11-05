import { actionType } from "../constants"

const initialState = [];

const currenUser = (state = initialState, action) => {
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
                postUploading: false
            }
    }
}

export default currenUser;
