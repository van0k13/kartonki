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
    isLoading: false,
}


const authReducer = (state: typeof initialState = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'auth_reducer/LOGIN_SUCCESS':
            return {
                ...state, authSuccess: action.loginSuccess, myName: action.myName,
                token: action.token, id: action.id
            }
        case 'auth_reducer/LOGIN_ERROR':
            return {
                ...state, errorMessage: action.errorMessage
            }
        case 'auth_reducer/IS_LOADING':
            return {
                ...state,
                isLoading: action.value
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

// global loading Action Creator
// export const isLoadingAC = (value: boolean):IisLoadingActionCreator => ({type: IS_LOADING, value});
// export const setTokenAC = (token: string):ISetToken => ({type: SET_TOKEN, token});


// const loginizationSuccessAC = (loginSuccess: boolean, myName:string, token:string, id: string):ILoginSuccess =>
//     ({type: LOGIN_SUCCESS, loginSuccess, myName, token, id})
// const loginizationErrorAC = (errorMessage: string):ILoginError => ({type: LOGIN_ERROR, errorMessage})



export const loginizationTC = (email:string, password:string, rememberMe: boolean): ThunkType =>
    async(dispatch: ThunkDispatch<RootState, unknown, ActionTypes>)  => {
        try {
            dispatch(actions.isLoadingAC(true));
            const data = await authAPI.loginizationAPI(email, password, rememberMe);
            if (data.error)
                dispatch(actions.loginizationErrorAC(data.error))
            else dispatch(actions.loginizationSuccessAC(data.success, data.name, data.token, data._id ))
        } catch (e) {
            dispatch(actions.loginizationErrorAC(e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false))
    }
export default authReducer;