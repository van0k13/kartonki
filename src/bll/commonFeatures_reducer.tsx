import {ActionTypes} from "./actions";

const initialState = {
    isLoading: false,
    isError: false,
    errorMessage: '',
}

type InitialStateType = typeof initialState;

const globalFeaturesReducer = (state:InitialStateType = initialState, action:ActionTypes):InitialStateType => {
    switch (action.type) {
        case 'commonFeatures_reducer/IS_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
        case 'commonFeatures_reducer/IS_ERROR':
            return {
                ...state,
                isError: action.value,
                errorMessage: action.message
            }
        default:
            return state
    }
}

export default globalFeaturesReducer;