import {
    CardsDeckType,
    ChatActionTypes,
    CREATE_DECK,
    DELETE_DECK,
    GET_DECK_ID,
    GET_DECKS,
    ICreateDeleteDeckActionCreator,
    IGetCardsDecks,
    IGetDeckId,
    ISetDeckName,
    ISetDeckPage,
    IStateCardsDeck,
    SET_DECK_NAME,
    SET_DECK_PAGE,
} from "./types";
import {Dispatch} from "redux";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {cardsDeckAPI} from "../dal/api";
import {RootState} from "./store";


const initialState: IStateCardsDeck = {
    decks: [],
    currentDeckId: '',
    currentDeckName: '',
    cardPacksTotalCount: 0, // количество колод
    maxGrade: 0,
    minGrade: 0,
    page: 3, // выбранная страница
    pageCount: 3 // количество элементов на странице
};


const cardsDeckReducer = (state: IStateCardsDeck = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case GET_DECKS:
            return {
                ...state, decks: action.decks, cardPacksTotalCount: action.cardPacksTotalCount,
                page: action.page
            };
        case GET_DECK_ID:
            return {
                ...state, currentDeckId: action.deckId
            }
        case SET_DECK_PAGE:
            return {
                ...state, page: action.page
            }
        case SET_DECK_NAME:
            return {
                ...state, currentDeckName: action.deckName
            }
        case CREATE_DECK:
            return {
                ...state,
                decks: [action.cardsDeck, ...state.decks]
            };
        case DELETE_DECK:
            return {
                ...state
            };
        default:
            return state;
    }
};


const setCardsDecksAC = (decks: Array<CardsDeckType>,
                         cardPacksTotalCount: number,
                         pageCount: number, page: number): IGetCardsDecks =>
    ({type: GET_DECKS, decks, cardPacksTotalCount, pageCount, page})
export const setDeckPageAC = (page: number): ISetDeckPage => ({type: SET_DECK_PAGE, page})
export const setCurrentDeckIdAC = (deckId: string): IGetDeckId => ({type: GET_DECK_ID, deckId})
export const setCurrentDeckNameAC = (deckName: string): ISetDeckName => ({type: SET_DECK_NAME, deckName})
const setNewCardsDeckAC = (newCardsDeck: CardsDeckType)
    : ICreateDeleteDeckActionCreator => ({type: CREATE_DECK, cardsDeck: newCardsDeck})


export const getDecksTC = (token: string) =>
    async (dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
        const {pageCount, page} = getState().decks
        try {
            dispatch(isLoadingAC(true))
            const data = await cardsDeckAPI.getAllCardsDecks(token, pageCount, page)
            dispatch(setCardsDecksAC(data.cardPacks, data.cardPacksTotalCount,
                data.pageCount, data.page))
            dispatch(setTokenAC(data.token))
        } catch (e) {
            dispatch(isLoadingAC(false))
        }
        dispatch(isLoadingAC(false))
    };

export const createNewCardDeckTC = (cardsDeck: { user_id: string; name: string }, token: string) =>
    async (dispatch: Dispatch<ChatActionTypes>) => {
        try {
            dispatch(isLoadingAC(true))
            const data = await cardsDeckAPI.addNewCardsDeck(cardsDeck, token)
            if (data.success === true)
                dispatch(setNewCardsDeckAC(data.newCardsPack,))
            dispatch(setTokenAC(data.token))
        } catch (e) {
            dispatch(isLoadingAC(false))
        }
        dispatch(isLoadingAC(false))
    }

export const editDeckTC = (editedDeck: { grade: number; name: string; _id: string }, token: string) =>
    async (dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
        const {pageCount, page} = getState().decks
        try {
            dispatch(isLoadingAC(true))
            const data = await cardsDeckAPI.updateCardsDeck(editedDeck, token)
            if (data.success === true) {
                const data2 = await cardsDeckAPI.getAllCardsDecks(data.token, pageCount, page)
                dispatch(setCardsDecksAC(data2.cardPacks, data.cardPacksTotalCount,
                    data.pageCount, data.page))
                dispatch(setTokenAC(data2.token))
            }
        } catch (e) {
            dispatch(isLoadingAC(false))
        }
        dispatch(isLoadingAC(false))
    }
export const deleteDeckTC = (token: string, deckId: string) =>
    async (dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
        const {pageCount, page} = getState().decks
        try {
            dispatch(isLoadingAC(true))
            const data = await cardsDeckAPI.deleteCardsDeck(token, deckId)
            dispatch(setTokenAC(data.token));
            if (data.success) {
                const data2 = await cardsDeckAPI.getAllCardsDecks(data.token, pageCount, page)
                dispatch(setCardsDecksAC(data2.cardPacks, data.cardPacksTotalCount,
                    data.pageCount, data.page))
                dispatch(setTokenAC(data2.token))
            }
        } catch (e) {
            dispatch(isLoadingAC(false))
        }
        dispatch(isLoadingAC(false))
    };

export default cardsDeckReducer;