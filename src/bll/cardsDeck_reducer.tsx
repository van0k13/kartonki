import {
    CardsDeckType,
    ChatActionTypes,
    CREATE_DECK,
    DELETE_DECK,
    GET_DECKS, ICreateDeleteDeckActionCreator,
    IGetCardsDecks,
    IStateCardsDeck,
} from "./types";
import {Dispatch} from "redux";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {cardsDeckAPI} from "../dal/api";


const initialState: IStateCardsDeck = {
    decks: []
};


const cardsDeckReducer = (state: IStateCardsDeck = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case GET_DECKS:
            return {
                ...state, decks: action.decks
            };
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

const setCardsDecksAC = (decks: Array<CardsDeckType>): IGetCardsDecks => ({type: GET_DECKS, decks})
const setNewCardsDeckAC = (newCardsDeck: CardsDeckType)
    : ICreateDeleteDeckActionCreator => ({type: CREATE_DECK, cardsDeck: newCardsDeck})

export const getDecksTC = (token: string) =>
    async (dispatch: Dispatch<ChatActionTypes>) => {
        try {
            dispatch(isLoadingAC(true))
            const data = await cardsDeckAPI.getCardsDecks(token)
            dispatch(setCardsDecksAC(data.cardPacks))
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
    async (dispatch: Dispatch<ChatActionTypes>) => {
        try {
            dispatch(isLoadingAC(true))
            const data = await cardsDeckAPI.updateCardsDeck(editedDeck, token)
            if (data.success === true) {
                const data2 = await cardsDeckAPI.getCardsDecks(data.token)
                dispatch(setCardsDecksAC(data2.cardPacks))
                dispatch(setTokenAC(data2.token))
            }
        } catch (e) {
            dispatch(isLoadingAC(false))
        }
        dispatch(isLoadingAC(false))
    }
export const deleteDeckTC = (token: string, deckId: string) =>
    async (dispatch: Dispatch<ChatActionTypes>) => {
        try {
            dispatch(isLoadingAC(true))
            const data = await cardsDeckAPI.deleteCardsDeck(token, deckId)
            dispatch(setTokenAC(data.token));
            if (data.success) {
                const data2 = await cardsDeckAPI.getCardsDecks(data.token)
                dispatch(setCardsDecksAC(data2.cardPacks))
                dispatch(setTokenAC(data2.token))
            }
        } catch (e) {
            dispatch(isLoadingAC(false))
        }
        dispatch(isLoadingAC(false))
    };

export default cardsDeckReducer;