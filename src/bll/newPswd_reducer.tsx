import {
    ChatActionTypes,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_ERROR,
    INewPasswordSuccess, INewPasswordError, IStatePasswordRecover
} from "./types";
import {Dispatch} from "redux";
import {setNewPasswordAPI} from "../dal/api";

const initialState: IStatePasswordRecover = {
    success: false,
    message: ''
};


const newPasswordReducer = (state: IStatePasswordRecover = initialState, action: ChatActionTypes) => {
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

//Thunk
export const newPasswordTC = (password: string, resetPasswordToken: string) =>
    async(dispatch: Dispatch<ChatActionTypes>)  => {
        try {
            const data = await setNewPasswordAPI(password, resetPasswordToken);
            if(data.error) {
                dispatch(setNewPasswordErrorAC(data.error));
            } else
                dispatch(setNewPasswordSuccessAC(data.success))
        } catch (e) {
            dispatch(setNewPasswordErrorAC(e.response.data.error));
            console.log(e.response.data.error)
        }
    };

//Action Creators
const setNewPasswordSuccessAC = (recoverSuccess: boolean)
    : INewPasswordSuccess => ({type: NEW_PASSWORD_SUCCESS, recoverSuccess});

export const setNewPasswordErrorAC = (errorMessage: string)
    : INewPasswordError => ({type: NEW_PASSWORD_ERROR, errorMessage});


export default newPasswordReducer;