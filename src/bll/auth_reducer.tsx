import {ThunkType} from "./actions";
import {authAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";
import {actions, ActionTypes} from "./actions";

const initialState = {
    id: '',
    authSuccess: false,
    myName: '',
    errorMessage: '',
    token: '',
}
export type initialStateType = typeof initialState

const authReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'auth_reducer/LOGIN_SUCCESS':
            return {
                ...state, authSuccess: action.loginSuccess, myName: action.myName,
                token: action.token, id: action.id
            }
        case 'auth_reducer/SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export const loginizationTC = (email:string, password:string, rememberMe: boolean): ThunkType =>
    async(dispatch: ThunkDispatch<RootState, unknown, ActionTypes>)  => {
        try {
            dispatch(actions.isLoadingAC(true));
            const data = await authAPI.loginizationAPI(email, password, rememberMe);
           dispatch(actions.loginizationSuccessAC(data.success, data.name, data.token, data._id ))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false))
    }
export default authReducer;