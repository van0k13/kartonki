import {ThunkType} from "./actions";
import {authAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";
import {actions, ActionTypes} from "./actions";

const initialState = {
    message: '',
    registeredSuccess: false
};

type InitialStateType = typeof initialState
const registrationReducer = (state:InitialStateType = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case "registr_reducer/REGISTRATE_SUCCESS":
            return {...state, message: 'successich', registeredSuccess: action.registeredSuccess}
        case "registr_reducer/REGISTRATE_ERROR":
            return {...state, message: action.errorMessage}
        default:
            return state;
    }
};


export const registrationTC = (email:string, password:string):ThunkType =>
     async(dispatch: ThunkDispatch<RootState, unknown, ActionTypes>)  => {
        try {
            dispatch(actions.isLoadingAC(true));
            const data = await authAPI.registrationAPI(email, password);
            dispatch(actions.registrationSuccessAC(data.success))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
         dispatch(actions.isLoadingAC(false));
}

export default registrationReducer;
