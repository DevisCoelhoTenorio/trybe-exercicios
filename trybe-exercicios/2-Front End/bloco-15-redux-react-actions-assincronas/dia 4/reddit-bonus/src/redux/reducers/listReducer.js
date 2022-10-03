import { UPDATE_LIST, LOAD_PAGE, ERROR_REQUEST } from '../actions'
const INITIAL_STATE = {
   list: [],
   isLoading: false,
   error: null,
};


const listReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type) {
        case ERROR_REQUEST: {
            return {
                ...state,
                error: payload,
            }
        }
        case LOAD_PAGE: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case UPDATE_LIST: {
            return {
                ...state,
                list: [...payload],
                isLoading: false,
            }
        }
        default: 
            return state;
    }
}

export default listReducer;
