import {ThunkType} from "./actions";
import {RootState} from "./store";
import {authAPI, cardsDeckAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {actions, ActionTypes} from "./actions";
import {CardsDeckType, IUserProfile} from "./types";

const initialState = {
    currentDecks: [] as Array<CardsDeckType>,
    chosenUserName: '',
    currentUserProfile: {} as IUserProfile,
    success: false
}
type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'profile_reducer/SET_MY_PROFILE':
            return {
                ...state, currentUserProfile: action.updatedUser
            }
        case 'profile_reducer/SET_CURRENT_DECKS':
            return {
                ...state, currentDecks: action.decks
            }
        case 'profile_reducer/SET_CHOSEN_USER_NAME':
            return {
                ...state, chosenUserName: action.userName
            }
        default:
            return state;
    }
}


export const getDecksTC = (id: string): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
        try {
            dispatch(actions.isLoadingAC(true))
            const data = await cardsDeckAPI.getDecks(id)
            dispatch(actions.setDecksAC(data.cardPacks))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false))
    }

export const setMyProfileTC = (): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
        const {id} = getState().auth
        try {
            dispatch(actions.isLoadingAC(true))
            const data = await authAPI.getMyProfileAPI()
            const setMyData = {
                avatar: data.avatar,
                email: data.email,
                name: data.name,
                publicCardPacksCount: data.publicCardPacksCount,
                _id: data._id
            }
            dispatch(actions.setMyProfileAC(setMyData))
            dispatch(getDecksTC(id))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false))
    }

export const setUserProfileTC = (): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
        const {chosenUserName} = getState().profile
        try {
            dispatch(actions.isLoadingAC(true))
            const data = await authAPI.getUserProfileAPI(chosenUserName)
            dispatch(actions.setMyProfileAC(data.users[0]))
            dispatch(getDecksTC(data.users[0]._id))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false))
    }

export const setAvatarTC = (newAvatar: string): ThunkType => async (
    dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
    try {
        dispatch(actions.isLoadingAC(true))
        const data = await authAPI.setProfileAvatarAPI(newAvatar)
        dispatch(actions.setMyProfileAC(data.updatedUser))
    } catch (e) {
        dispatch(actions.isErrorAC(true, e.response.data.error))
    }
    dispatch(actions.isLoadingAC(false))
}

export const setNameTC = (newName: string): ThunkType => async (
    dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
    try {
        dispatch(actions.isLoadingAC(true))
        const data = await authAPI.setProfileNameAPI(newName)
        dispatch(actions.setMyProfileAC(data.updatedUser))
    } catch (e) {
        dispatch(actions.isErrorAC(true, e.response.data.error))
    }
    dispatch(actions.isLoadingAC(false))
}


export default profileReducer;