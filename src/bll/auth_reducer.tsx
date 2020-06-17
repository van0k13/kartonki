import {ThunkType} from "./actions";
import {authAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";
import {actions, ActionTypes} from "./actions";
import { saveTokenToLS } from "../ui/common/save&takeToken";

const initialState = {
    id: '',
    authSuccess: false,
    myName: '',
    errorMessage: '',
}
export type initialStateType = typeof initialState

const authReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'auth_reducer/LOGIN_SUCCESS':
            return {
                ...state, authSuccess: action.loginSuccess, myName: action.myName,
                id: action.id
            }
        case 'auth_reducer/LOG_OUT':
            localStorage.removeItem('token for kartonki')
            return {
                ...state
            }
        case 'auth_reducer/SET_AUTH_SUCCESS':
            return {
                ...state, authSuccess: true
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
            saveTokenToLS(data.token)
           dispatch(actions.loginizationSuccessAC(data.success, data.name, data.token, data._id ))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false))
    }
export default authReducer;