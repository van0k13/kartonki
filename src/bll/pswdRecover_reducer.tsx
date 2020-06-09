import {ThunkType} from "./actions";
import {authAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";
import {actions, ActionTypes} from "./actions";

const initialState = {
    success: false,
    message: ''
};

type InitialStateType = typeof initialState;
const passwordRecoveringReducer = (state:InitialStateType=initialState,action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case "pswdRecover_reducer/PASSWORD_RECOVER_SUCCESS":
            return {
                ...state,
                success: action.recoverSuccess,
                message: 'Successful! Check your email.'
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
            dispatch(actions.passwordRecoverSuccessAC(data.success))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false))
    };


export default passwordRecoveringReducer;