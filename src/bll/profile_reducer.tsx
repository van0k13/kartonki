import {ChatActionTypes, SECOND_ACTION, IStateProfile, ISetMyName, SET_MY_NAME} from "./types";
import {Dispatch} from "redux";
import {RootState} from "./store";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {authAPI} from "../dal/api";

const initialState: IStateProfile = {
    myDecks: [],
    myName: '',
    avatar: '',
    success: false
}


const profileReducer = (state: IStateProfile = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case SET_MY_NAME:
            return {
                ...state, myName: action.myName, avatar:action.avatar
            }
        case SECOND_ACTION:
            return state
        default:
            return state;
    }
}

const setMyNameAvatarAC = (myName: string, avatar: string): ISetMyName => ({type: SET_MY_NAME, myName,avatar})

export const setMyProfileTC = () => async (
    dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    try {
        dispatch(isLoadingAC(true))
        const data = await authAPI.getProfileAPI(token)
        dispatch(setTokenAC(data.token))
        dispatch(setMyNameAvatarAC(data.name, data.avatar))
        debugger
    } catch (e) {
        dispatch(isLoadingAC(false))
    }
    dispatch(isLoadingAC(false))
}
export const setAvatarOrNameTC = (name:string) => async (
    dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    const {avatar} = getState().profile
    try {
        dispatch(isLoadingAC(true))
        const data = await authAPI.setProfileAPI(token, name, avatar)
        dispatch(setTokenAC(data.token))
        dispatch(setMyNameAvatarAC(data.updatedUser.name, avatar))
    } catch (e) {
        dispatch(isLoadingAC(false))
    }
    dispatch(isLoadingAC(false))
}
export default profileReducer;