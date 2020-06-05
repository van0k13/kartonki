import {ThunkType} from "./actions";
import {authAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";
import {actions, ActionTypes} from "./actions";

const initialState = {
    message: '',
    registeredSuccess: false
};


const registrationReducer = (state:typeof initialState = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "registr_reducer/REGISTRATE_SUCCESS":
            return {...state, message: 'successich', registeredSuccess: action.registeredSuccess}
        case "registr_reducer/REGISTRATE_ERROR":
            return {...state, message: action.errorMessage}
        default:
            return state;
    }
};


// const registrationSuccessAC = (registeredSuccess: boolean)
//     : IRegistrateSuccess => ({type: REGISTRATE_SUCCESS, registeredSuccess});
// export const registrationErrorAC = (errorMessage: string)
//     : IRegistrateError => ({type: REGISTRATE_ERROR, errorMessage});


export const registrationTC = (email:string, password:string):ThunkType =>
     async(dispatch: ThunkDispatch<RootState, unknown, ActionTypes>)  => {
        try {
            dispatch(actions.isLoadingAC(true));
            const data = await authAPI.registrationAPI(email, password);
            if(data.error) {
                dispatch(actions.registrationErrorAC(data.error));
            } else
                dispatch(actions.registrationSuccessAC(data.success))
        } catch (e) {
            dispatch(actions.registrationErrorAC(e.response.data.error))
        }
         dispatch(actions.isLoadingAC(false));
}

export default registrationReducer;
