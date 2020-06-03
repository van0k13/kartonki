import {
    CardsDeckType,
    ChatActionTypes,
    ISetMyDecks,
    ISetMyName,
    IStateProfile,
    SET_MY_DECKS,
    SET_MY_NAME
} from "./types";
import {Dispatch} from "redux";
import {RootState} from "./store";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {authAPI, cardsDeckAPI} from "../dal/api";

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
                ...state, myName: action.myName, avatar: action.avatar
            }
        case SET_MY_DECKS:
            return {
                ...state, myDecks: action.decks
            }
        default:
            return state;
    }
}

const setMyNameAvatarAC = (myName: string, avatar: string): ISetMyName => ({type: SET_MY_NAME, myName, avatar})
const setMyDecksAC = (decks: Array<CardsDeckType>): ISetMyDecks => ({type: SET_MY_DECKS, decks})

export const getMyDecksTC = () => async (
    dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
    const { id, token} = getState().auth
    try {
        dispatch(isLoadingAC(true))
        const data = await cardsDeckAPI.getMyDecks(token, id)
        dispatch(setMyDecksAC(data.cardPacks))
    } catch (e) {
        dispatch(isLoadingAC(false))
    }
    dispatch(isLoadingAC(false))
}

export const setMyProfileTC = () => async (
    dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    try {
        dispatch(isLoadingAC(true))
        const data = await authAPI.getProfileAPI(token)
        dispatch(setTokenAC(data.token))
        dispatch(setMyNameAvatarAC(data.name, data.avatar))
    } catch (e) {
        dispatch(isLoadingAC(false))
    }
    dispatch(isLoadingAC(false))
}
export const setAvatarOrNameTC = (newName?: string, newAvatar?: string) => async (
    dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    const {avatar, myName} = getState().profile
    let avatarOnServer = '';
    newAvatar? avatarOnServer = newAvatar : avatarOnServer = avatar
    let nameOnServer = '';
    newName? nameOnServer = newName : nameOnServer = myName
    try {
        dispatch(isLoadingAC(true))
        debugger
        const data = await authAPI.setProfileAPI(token, nameOnServer, avatarOnServer)
        dispatch(setTokenAC(data.token))
        dispatch(setMyNameAvatarAC(data.updatedUser.name, data.updatedUser.avatar !== null
            ? data.updatedUser.avatar
            : avatar))
    } catch (e) {
        dispatch(isLoadingAC(false))
    }
    dispatch(isLoadingAC(false))
}
export default profileReducer;