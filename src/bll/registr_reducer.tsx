import {
    ChatActionTypes,
    REGISTRATE_ERROR,
    REGISTRATE_SUCCESS,
    IRegistrateSuccess,
    IRegistrateError, IStateRegistr
} from "./types";
import {Dispatch} from "redux";
import {registrationAPI} from "../dal/api";

const initialState:IStateRegistr = {
    message: '',
    registeredSuccess: false
};

const registrationReducer = (state:IStateRegistr = initialState, action: ChatActionTypes) => {
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


export const registrationTC = (email:string, password:string) =>
     async(dispatch: Dispatch<ChatActionTypes>)  => {
        try {
            const data = await registrationAPI(email, password);
            if(data.error) {
                dispatch(registrationErrorAC(data.error));
            } else
                dispatch(registrationSuccessAC(data.success))
        } catch (e) {
            dispatch(registrationErrorAC(e.response.data.error))
        }
}

export default registrationReducer;
