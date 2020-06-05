import {
    ChatActionTypes,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_ERROR,
    INewPasswordSuccess, INewPasswordError, IStatePasswordRecover, ThunkType
} from "./types";
import {authAPI} from "../dal/api";
import {isLoadingAC} from "./auth_reducer";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";

const initialState: IStatePasswordRecover = {
    success: false,
    message: ''
};


const newPasswordReducer = (state: IStatePasswordRecover = initialState,
                            action: ChatActionTypes): IStatePasswordRecover => {
    switch (action.type) {
        case NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                success: action.recoverSuccess,
                message: 'Successful!'
            };
        case NEW_PASSWORD_ERROR:
            return {
                ...state,
                message: action.errorMessage
            };
        default:
            return state;
    }
};


//Action Creators
const setNewPasswordSuccessAC = (recoverSuccess: boolean)
    : INewPasswordSuccess => ({type: NEW_PASSWORD_SUCCESS, recoverSuccess});

export const setNewPasswordErrorAC = (errorMessage: string)
    : INewPasswordError => ({type: NEW_PASSWORD_ERROR, errorMessage});

//Thunk
export const newPasswordTC = (password: string, resetPasswordToken: string): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>) => {
        try {
            dispatch(isLoadingAC(true))
            const data = await authAPI.setNewPasswordAPI(password, resetPasswordToken);
            data.error
                ? dispatch(setNewPasswordErrorAC(data.error))
                : dispatch(setNewPasswordSuccessAC(data.success))
        } catch (e) {
            dispatch(setNewPasswordErrorAC(e.response.data.error));
        }
        dispatch(isLoadingAC(false))
    };


export default newPasswordReducer;