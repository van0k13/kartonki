import {ThunkType} from "./actions";
import {RootState} from "./store";
import {authAPI, cardsDeckAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {actions, ActionTypes} from "./actions";
import {CardsDeckType} from "./types";

const initialState = {
    myDecks: [] as Array<CardsDeckType>,
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
type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case 'profile_reducer/SET_MY_PROFILE':
            return {
                ...state, myProfile: action.updatedUser
            }
        case 'profile_reducer/SET_MY_DECKS':
            return {
                ...state, myDecks: action.decks
            }
        default:
            return state;
    }
}


export const getMyDecksTC = ():ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
    const { id, token} = getState().auth
    try {
        dispatch(actions.isLoadingAC(true))
        const data = await cardsDeckAPI.getMyDecks(token, id)
        dispatch(actions.setMyDecksAC(data.cardPacks))
        dispatch(actions.setTokenAC(data.token))
    } catch (e) {
        dispatch(actions.isErrorAC(true, e.response.data.error))
    }
    dispatch(actions.isLoadingAC(false))
}

export const setMyProfileTC = ():ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    try {
        dispatch(actions.isLoadingAC(true))
        const data = await authAPI.getProfileAPI(token)
        dispatch(actions.setTokenAC(data.token))
        await dispatch(actions.setMyProfileAC(data))
       dispatch(getMyDecksTC())
    } catch (e) {
        dispatch(actions.isErrorAC(true, e.response.data.error))
    }
    dispatch(actions.isLoadingAC(false))
}
export const setAvatarTC = (newAvatar: string):ThunkType => async (
    dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    try {
        dispatch(actions.isLoadingAC(true))
        const data = await authAPI.setProfileAvatarAPI(token, newAvatar)
        dispatch(actions.setTokenAC(data.token))
        dispatch(actions.setMyProfileAC(data.updatedUser))
    } catch (e) {
        dispatch(actions.isErrorAC(true, e.response.data.error))
    }
    dispatch(actions.isLoadingAC(false))
}
export const setNameTC = (newName: string):ThunkType => async (
    dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    try {
        dispatch(actions.isLoadingAC(true))
        const data = await authAPI.setProfileNameAPI(token, newName)
        dispatch(actions.setTokenAC(data.token))
        dispatch(actions.setMyProfileAC(data.updatedUser))
    } catch (e) {
        dispatch(actions.isErrorAC(true, e.response.data.error))
    }
    dispatch(actions.isLoadingAC(false))
}
export default profileReducer;