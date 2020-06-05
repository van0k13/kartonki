import {
    ChatActionTypes,
    REGISTRATE_ERROR,
    REGISTRATE_SUCCESS,
    IRegistrateSuccess,
    IRegistrateError, IStateRegistr, ThunkType
} from "./types";
import {authAPI} from "../dal/api";
import {isLoadingAC} from "./auth_reducer";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";

const initialState:IStateRegistr = {
    message: '',
    registeredSuccess: false
};

const registrationReducer = (state:IStateRegistr = initialState, action: ChatActionTypes): IStateRegistr => {
    switch (action.type) {
        case REGISTRATE_SUCCESS:
            return {...state, message: 'successich', registeredSuccess: action.registeredSuccess}
        case REGISTRATE_ERROR:
            return {...state, message: action.errorMessage}
        default:
            return state;
    }
};


const registrationSuccessAC = (registeredSuccess: boolean)
    : IRegistrateSuccess => ({type: REGISTRATE_SUCCESS, registeredSuccess});
export const registrationErrorAC = (errorMessage: string)
    : IRegistrateError => ({type: REGISTRATE_ERROR, errorMessage});


export const registrationTC = (email:string, password:string):ThunkType =>
     async(dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>)  => {
        try {
            dispatch(isLoadingAC(true));
            const data = await authAPI.registrationAPI(email, password);
            if(data.error) {
                dispatch(registrationErrorAC(data.error));
            } else
                dispatch(registrationSuccessAC(data.success))
        } catch (e) {
            dispatch(registrationErrorAC(e.response.data.error))
        }
         dispatch(isLoadingAC(false));
}

export default registrationReducer;
