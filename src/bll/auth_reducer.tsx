import {
    ChatActionTypes,
    ILoginError,
    ILoginSuccess,
    IStateLogin,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from "./types";
import {Dispatch} from "redux";
import {loginizationAPI} from "../dal/api";

const initialState: IStateLogin = {
    authSuccess: false,
    myName: '',
    errorMessage: '',
    token: ''
}


const authReducer = (state: IStateLogin = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state, authSuccess: action.loginSuccess, myName: action.myName,
                token: action.token
            }
        case LOGIN_ERROR:
            return {
                ...state, errorMessage: action.errorMessage
            }
        default:
            return state;
    }
}


const loginizationSuccessAC = (loginSuccess: boolean, myName:string, token:string):ILoginSuccess =>
    ({type: LOGIN_SUCCESS, loginSuccess, myName, token})
const loginizationErrorAC = (errorMessage: string):ILoginError => ({type: LOGIN_ERROR, errorMessage})



export const loginizationTC = (email:string, password:string, rememberMe: boolean) =>
    async(dispatch: Dispatch<ChatActionTypes>)  => {
        try {
            const data = await loginizationAPI(email, password, rememberMe);
            if (data.error)
                dispatch(loginizationErrorAC(data.error))
            else dispatch(loginizationSuccessAC(data.success, data.name, data.token ))
        } catch (e) {
            dispatch(loginizationErrorAC(e.response.data.error))
        }
    }
export default authReducer;