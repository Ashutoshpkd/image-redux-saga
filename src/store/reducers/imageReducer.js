import { IMAGE_ERROR, FETCH_IMAGES, FETCH_IMAGE_SUCCESS } from "../../constants";

const INITIAL_STATE = {
    images: null,
    isLoading: false,
    error: null,
    pageNumber: 0,
}

const imageReducer = (state=INITIAL_STATE, action) => {
    if(action.type === FETCH_IMAGES) {
        return {
            ...state,
            isLoading: true,
        };
    }
    if(action.type === FETCH_IMAGE_SUCCESS) {
        // console.log('ASHUTOSH_PAWADE', state, action);
        return {
            ...state,
            images: state.images ? [...state.images, ...action.images] : action.images,
            isLoading: false,
            pageNumber: state.pageNumber + 1,
        }
    }
    if(action.type === IMAGE_ERROR) {
        return {
            ...state,
            error: action.error,
            isLoading: false,
        }
    }
    return state;
}

export default imageReducer;