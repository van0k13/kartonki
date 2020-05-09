import {
    ChatActionTypes,
    PASSWORD_RECOVER_ERROR,
    PASSWORD_RECOVER_SUCCESS,
    IPasswordRecoverSuccess,
    IPasswordRecoverError, IStatePasswordRecover
} from "./types";
import {Dispatch} from "redux";
import {passwordRecoverAPI} from "../dal/api";

const initialState: IStatePasswordRecover = {
    success: false,
    message: ''
};


const passwordRecoveringReducer = (state: IStatePasswordRecover = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case PASSWORD_RECOVER_SUCCESS:
            return {
                ...state,
                success: action.recoverSuccess,
                message: 'Успешно! Проверьте свой email.'
            };
        case PASSWORD_RECOVER_ERROR:
            return {
                ...state,
                message: action.errorMessage
            };
        default:
            return state;
    }
};

//Thunk
export const passwordRecoverTC = (email:string) =>
    async(dispatch: Dispatch<ChatActionTypes>)  => {
        try {
            const data = await passwordRecoverAPI(email);
            console.log(data)
            if(data.error) {
                dispatch(passwordRecoverErrorAC(data.error));
            } else
                dispatch(passwordRecoverSuccessAC(data.success))
        } catch (e) {
            dispatch(passwordRecoverErrorAC(e.response.data.error));
            console.log(e.response.data.error)
        }
    };

//Action Creators (success error)
const passwordRecoverSuccessAC = (recoverSuccess: boolean)
    : IPasswordRecoverSuccess => ({type: PASSWORD_RECOVER_SUCCESS, recoverSuccess});

export const passwordRecoverErrorAC = (errorMessage: string)
    : IPasswordRecoverError => ({type: PASSWORD_RECOVER_ERROR, errorMessage});



export default passwordRecoveringReducer;