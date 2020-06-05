import {ThunkType} from "./actions";
import {cardsDeckAPI} from "../dal/api";
import {RootState} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {actions, ActionTypes} from "./actions";


const initialState = {
    decks: [],
    currentDeckId: '',
    currentDeckName: '',
    cardPacksTotalCount: 0, // количество колод
    maxGrade: 0,
    minGrade: 0,
    page: 3, // выбранная страница
    pageCount: 3 // количество элементов на странице
};


const cardsDeckReducer = (state: typeof initialState = initialState, action: ActionTypes) => {
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


// const setCardsDecksAC = (decks: Array<CardsDeckType>,
//                          cardPacksTotalCount: number,
//                          pageCount: number, page: number): IGetCardsDecks =>
//     ({type: GET_DECKS, decks, cardPacksTotalCount, pageCount, page})
// export const setDeckPageAC = (page: number): ISetDeckPage => ({type: SET_DECK_PAGE, page})
// export const setCurrentDeckIdAC = (deckId: string): IGetDeckId => ({type: GET_DECK_ID, deckId})
// export const setCurrentDeckNameAC = (deckName: string): ISetDeckName => ({type: SET_DECK_NAME, deckName})
// const setNewCardsDeckAC = (newCardsDeck: CardsDeckType)
//     : ICreateDeleteDeckActionCreator => ({type: CREATE_DECK, cardsDeck: newCardsDeck})


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
            dispatch(actions.isLoadingAC(false))
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
            dispatch(actions.isLoadingAC(false))
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
            dispatch(actions.isLoadingAC(false))
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
            dispatch(actions.isLoadingAC(false))
        }
        dispatch(actions.isLoadingAC(false))
    };

export default cardsDeckReducer;