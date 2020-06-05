import {ThunkType} from "./actions";
import {authAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";
import {actions, ActionTypes} from "./actions";

const initialState = {
    success: false,
    message: ''
};


const passwordRecoveringReducer = (state: typeof initialState = initialState,action: ActionTypes) => {
    switch (action.type) {
        case "pswdRecover_reducer/PASSWORD_RECOVER_SUCCESS":
            return {
                ...state,
                success: action.recoverSuccess,
                message: 'Успешно! Проверьте свой email.'
            };
        case "pswdRecover_reducer/PASSWORD_RECOVER_ERROR":
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
    async(dispatch: ThunkDispatch<RootState, unknown, ActionTypes>)  => {
        try {
            dispatch(actions.isLoadingAC(true))
            const data = await authAPI.passwordRecoverAPI(email);
            if(data.error) {
                dispatch(actions.passwordRecoverErrorAC(data.error));
            } else
                dispatch(actions.passwordRecoverSuccessAC(data.success))
        } catch (e) {
            dispatch(actions.passwordRecoverErrorAC(e.response.data.error));
        }
        dispatch(actions.isLoadingAC(false))
    };

//Action Creators (success error)
// const passwordRecoverSuccessAC = (recoverSuccess: boolean)
//     : IPasswordRecoverSuccess => ({type: PASSWORD_RECOVER_SUCCESS, recoverSuccess});
//
// export const passwordRecoverErrorAC = (errorMessage: string)
//     : IPasswordRecoverError => ({type: PASSWORD_RECOVER_ERROR, errorMessage});



export default passwordRecoveringReducer;