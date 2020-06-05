import {
    ChatActionTypes,
    PASSWORD_RECOVER_ERROR,
    PASSWORD_RECOVER_SUCCESS,
    IPasswordRecoverSuccess,
    IPasswordRecoverError, IStatePasswordRecover, ThunkType
} from "./types";
import {authAPI} from "../dal/api";
import {isLoadingAC} from "./auth_reducer";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";

const initialState: IStatePasswordRecover = {
    success: false,
    message: ''
};


const passwordRecoveringReducer = (state: IStatePasswordRecover = initialState,
                                   action: ChatActionTypes):IStatePasswordRecover => {
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
export const passwordRecoverTC = (email:string): ThunkType =>
    async(dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>)  => {
        try {
            dispatch(isLoadingAC(true))
            const data = await authAPI.passwordRecoverAPI(email);
            if(data.error) {
                dispatch(passwordRecoverErrorAC(data.error));
            } else
                dispatch(passwordRecoverSuccessAC(data.success))
        } catch (e) {
            dispatch(passwordRecoverErrorAC(e.response.data.error));
        }
        dispatch(isLoadingAC(false))
    };

//Action Creators (success error)
const passwordRecoverSuccessAC = (recoverSuccess: boolean)
    : IPasswordRecoverSuccess => ({type: PASSWORD_RECOVER_SUCCESS, recoverSuccess});

export const passwordRecoverErrorAC = (errorMessage: string)
    : IPasswordRecoverError => ({type: PASSWORD_RECOVER_ERROR, errorMessage});



export default passwordRecoveringReducer;