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
    SET_TOKEN, ThunkType
} from "./types";
import {authAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";

const initialState: IStateLogin = {
    id: '',
    authSuccess: false,
    myName: '',
    errorMessage: '',
    token: '',
    isLoading: false,
}


const authReducer = (state: IStateLogin = initialState, action: ChatActionTypes): IStateLogin => {
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



export const loginizationTC = (email:string, password:string, rememberMe: boolean): ThunkType =>
    async(dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>)  => {
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