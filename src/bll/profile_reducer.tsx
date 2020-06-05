import {
    CardsDeckType,
    ChatActionTypes,
    IMyProfileType,
    ISetMyDecks,
    ISetMyProfile,
    IStateProfile,
    SET_MY_DECKS,
    SET_MY_PROFILE, ThunkType
} from "./types";
import {RootState} from "./store";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {authAPI, cardsDeckAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";



const initialState: IStateProfile = {
    myDecks: [],
    myProfile: {
        email: "",
        isAdmin: false,
        name: "",
        rememberMe: false,
        token: '',
        tokenDeathTime: 1578670634199,
        __v: 0,
        _id: "5e173fb328594800049f1a8f",
        success: true,
        avatar: '',
        verified: false
    },
    success: false
}


const profileReducer = (state: IStateProfile = initialState, action: ChatActionTypes): IStateProfile => {
    switch (action.type) {
        case SET_MY_PROFILE:
            return {
                ...state, myProfile: action.updatedUser
            }
        case SET_MY_DECKS:
            return {
                ...state, myDecks: action.decks
            }
        default:
            return state;
    }
}

const setMyProfileAC = (updatedUser: IMyProfileType): ISetMyProfile => ({type: SET_MY_PROFILE, updatedUser})
const setMyDecksAC = (decks: Array<CardsDeckType>): ISetMyDecks => ({type: SET_MY_DECKS, decks})

export const getMyDecksTC = ():ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>, getState: () => RootState) => {
    const { id, token} = getState().auth
    try {
        dispatch(isLoadingAC(true))
        const data = await cardsDeckAPI.getMyDecks(token, id)
        dispatch(setMyDecksAC(data.cardPacks))
        dispatch(setTokenAC(data.token))
    } catch (e) {
        dispatch(isLoadingAC(false))
    }
    dispatch(isLoadingAC(false))
}

export const setMyProfileTC = ():ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    try {
        dispatch(isLoadingAC(true))
        const data = await authAPI.getProfileAPI(token)
        dispatch(setTokenAC(data.token))
        dispatch(setMyProfileAC(data))
    } catch (e) {
        dispatch(isLoadingAC(false))
    }
    dispatch(isLoadingAC(false))
}
export const setAvatarTC = (newAvatar: string):ThunkType => async (
    dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    try {
        dispatch(isLoadingAC(true))
        const data = await authAPI.setProfileAvatarAPI(token, newAvatar)
        dispatch(setTokenAC(data.token))
        dispatch(setMyProfileAC(data.updatedUser))
    } catch (e) {
        dispatch(isLoadingAC(false))
    }
    dispatch(isLoadingAC(false))
}
export const setNameTC = (newName: string):ThunkType => async (
    dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    try {
        dispatch(isLoadingAC(true))
        const data = await authAPI.setProfileNameAPI(token, newName)
        dispatch(setTokenAC(data.token))
        dispatch(setMyProfileAC(data.updatedUser))
    } catch (e) {
        dispatch(isLoadingAC(false))
    }
    dispatch(isLoadingAC(false))
}
export default profileReducer;