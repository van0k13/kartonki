import {ThunkType} from "./actions";
import {authAPI} from "../dal/api";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./store";
import {actions, ActionTypes} from "./actions";
import {IUserProfile} from "./types";

const initialState = {
    allUsers:[] as Array<IUserProfile>
}
export type initialStateType = typeof initialState

const allUsersReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'auth_reducer/SET_ALL_USERS':
            return {
                ...state, allUsers: action.newUsers
            }
        default:
            return state;
    }
}

export const getAllUsersTC = (): ThunkType =>
    async(dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState)  => {
    const {token} = getState().auth
        try {
            dispatch(actions.isLoadingAC(true));
            const usersData = await authAPI.getAllUsersAPI(token)
            dispatch(actions.setAllUsers(usersData.users))
            dispatch(actions.setTokenAC(usersData.token))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false))
    }
export default allUsersReducer;