import {
    ChatActionTypes,
    IisLoadingActionCreator,
    ILoginError,
    ILoginSuccess,
    IS_LOADING,
    ISetToken,
    IStateLogin,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SET_TOKEN
} from "./types";
import {Dispatch} from "redux";
import {authAPI} from "../dal/api";

const initialState: IStateLogin = {
    id: 0,
    authSuccess: false,
    myName: '',
    errorMessage: '',
    token: '',
    isLoading: false,
}


const authReducer = (state: IStateLogin = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state, authSuccess: action.loginSuccess, myName: action.myName,
                token: action.token, id: action.id
            }
        case LOGIN_ERROR:
            return {
                ...state, errorMessage: action.errorMessage
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

// global loading Action Creator
export const isLoadingAC = (value: boolean):IisLoadingActionCreator => ({type: IS_LOADING, value});
export const setTokenAC = (token: string):ISetToken => ({type: SET_TOKEN, token});


const loginizationSuccessAC = (loginSuccess: boolean, myName:string, token:string, id: string):ILoginSuccess =>
    ({type: LOGIN_SUCCESS, loginSuccess, myName, token, id})
const loginizationErrorAC = (errorMessage: string):ILoginError => ({type: LOGIN_ERROR, errorMessage})



export const loginizationTC = (email:string, password:string, rememberMe: boolean) =>
    async(dispatch: Dispatch<ChatActionTypes>)  => {
        try {
            dispatch(isLoadingAC(true));
            const data = await authAPI.loginizationAPI(email, password, rememberMe);
            if (data.error)
                dispatch(loginizationErrorAC(data.error))
            else dispatch(loginizationSuccessAC(data.success, data.name, data.token, data._id ))
        } catch (e) {
            dispatch(loginizationErrorAC(e.response.data.error))
        }
        dispatch(isLoadingAC(false))
    }
export default authReducer;