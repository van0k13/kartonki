import {ThunkType} from "./actions";
import {cardsDeckAPI} from "../dal/api";
import {RootState} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {actions, ActionTypes} from "./actions";
import {CardsDeckType} from "./types";


const initialState = {
    decks: [] as Array<CardsDeckType>,
    currentDeckId: '',
    currentDeckName: '',
    cardPacksTotalCount: 0, // количество колод
    maxGrade: 0,
    minGrade: 0,
    page: 1, // выбранная страница
    pageCount: 3 // количество элементов на странице
};

type InitialStateType = typeof initialState
const cardsDeckReducer = (state: InitialStateType = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case 'cardsDeck_reducer/GET_DECKS':
            return {
                ...state, decks: action.decks, cardPacksTotalCount: action.cardPacksTotalCount,
                page: action.page
            };
        case 'cardsDeck_reducer/GET_DECK_ID':
            return {
                ...state, currentDeckId: action.deckId
            }
        case 'cardsDeck_reducer/SET_DECK_PAGE':
            return {
                ...state, page: action.page
            }
        case 'cardsDeck_reducer/SET_DECK_NAME':
            return {
                ...state, currentDeckName: action.deckName
            }
        case 'cardsDeck_reducer/CREATE_DECK':
            return {
                ...state,
                decks: [action.cardsDeck, ...state.decks]
            }
        default:
            return state;
    }
};


export const getDecksTC = (token: string): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
        const {pageCount, page} = getState().decks
        try {
            dispatch(actions.isLoadingAC(true))
            const data = await cardsDeckAPI.getAllCardsDecks(token, pageCount, page)
            dispatch(actions.setCardsDecksAC(data.cardPacks, data.cardPacksTotalCount,
                data.pageCount, data.page))
            dispatch(actions.setTokenAC(data.token))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false))
    };

export const createNewCardDeckTC = (cardsDeck: { user_id: string; name: string }, token: string):ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
        try {
            dispatch(actions.isLoadingAC(true))
            const data = await cardsDeckAPI.addNewCardsDeck(cardsDeck, token)
            if (data.success === true)
                dispatch(actions.setNewCardsDeckAC(data.newCardsPack,))
            dispatch(actions.setTokenAC(data.token))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
            dispatch(actions.setTokenAC(e.response.data.token))
        }
        dispatch(actions.isLoadingAC(false))
    }

export const editDeckTC = (editedDeck: { grade: number; name: string; _id: string }, token: string): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
        try {
            dispatch(actions.isLoadingAC(true))
            const data = await cardsDeckAPI.updateCardsDeck(editedDeck, token)
            if (data.success) {
                getDecksTC(data.token)
            }
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
            dispatch(actions.setTokenAC(e.response.data.token))
        }
        dispatch(actions.isLoadingAC(false))
    }

export const deleteDeckTC = (token: string, deckId: string):ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
        try {
            dispatch(actions.isLoadingAC(true))
            const data = await cardsDeckAPI.deleteCardsDeck(token, deckId)
            dispatch(actions.setTokenAC(data.token));
            if (data.success) {
                getDecksTC(data.token)
            }
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
            dispatch(actions.setTokenAC(e.response.data.token))
        }
        dispatch(actions.isLoadingAC(false))
    };

export default cardsDeckReducer;