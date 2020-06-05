import {ThunkType} from "./actions";
import {authAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";
import {actions, ActionTypes} from "./actions";

const initialState = {
    success: false,
    message: ''
};


const newPasswordReducer = (state: typeof initialState = initialState,
                            action: ActionTypes) => {
    switch (action.type) {
        case 'newPswd_reducer/NEW_PASSWORD_SUCCESS':
            return {
                ...state,
                success: action.recoverSuccess,
                message: 'Successful!'
            };
        case 'newPswd_reducer/NEW_PASSWORD_ERROR':
            return {
                ...state,
                message: action.errorMessage
            };
        default:
            return state;
    }
};


//Action Creators
// const setNewPasswordSuccessAC = (recoverSuccess: boolean)
//     : INewPasswordSuccess => ({type: NEW_PASSWORD_SUCCESS, recoverSuccess});
//
// export const setNewPasswordErrorAC = (errorMessage: string)
//     : INewPasswordError => ({type: NEW_PASSWORD_ERROR, errorMessage});

//Thunk
export const newPasswordTC = (password: string, resetPasswordToken: string): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
        try {
            dispatch(actions.isLoadingAC(true))
            const data = await authAPI.setNewPasswordAPI(password, resetPasswordToken);
            data.error
                ? dispatch(actions.setNewPasswordErrorAC(data.error))
                : dispatch(actions.setNewPasswordSuccessAC(data.success))
        } catch (e) {
            dispatch(actions.setNewPasswordErrorAC(e.response.data.error));
        }
        dispatch(actions.isLoadingAC(false))
    };


export default newPasswordReducer;