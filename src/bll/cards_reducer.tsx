import {
    CardsType,
    ChatActionTypes,
    CREATE_CARD,
    DELETE_CARD,
    EDIT_CARD, ICreateCardActionCreator,
    IDeleteCardActionCreator,
    IEditCardActionCreator, ISetCards,
    IStateCards, SET_CARDS,
} from "./types";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {cardsAPI} from "../dal/api";


const initialState: IStateCards = {
    cards: [],
    cardID: '',
    cardsDeckID: '',
    success: false
};


const cardsReducer = (state: IStateCards = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case EDIT_CARD:
            return {
                ...state, item: action.item,
            };
        case DELETE_CARD:
            return {
                ...state,
            };
        case CREATE_CARD:
            return {
                ...state, cards: [...state.cards, action.newCard], success: action.successBoolean
            };
        default:
            return state;
    }
};

// Action Creator
const editCardAC = (item: IStateCards, cardsDeckID: string, cardID: string): IEditCardActionCreator =>
    ({type: EDIT_CARD, item, cardsDeckID, cardID});

const deleteCardAC = (cardsDeckID: string, cardId: string): IDeleteCardActionCreator =>
    ({type: DELETE_CARD, cardsDeckID, cardId});
const createCardAC = (newCard: CardsType, successBoolean: boolean): ICreateCardActionCreator =>
    ({type: CREATE_CARD, newCard, successBoolean});
const getCardsAC = (cards: Array<CardsType>): ISetCards => ({type: SET_CARDS, cards});

// Thunk
export const getCardsTC = (token: string, id: string) =>
    async (dispatch: any) => {
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.getCards(token, id);
            dispatch(getCardsAC(data.cards))
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };
export const createCardTC = (token: string, deckId: string) =>
    async (dispatch: any) => {
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.addCard(token, deckId);
            dispatch(createCardAC(data.newCard, data.success));
            dispatch(setTokenAC(data.token));
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };
export const editCardTC = (token: string, id: string) =>
    async (dispatch: any) => {
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.updateCard(token, id);
            dispatch(editCardAC(data.cards, data.cardsDeckID, data.cardID))
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };
export const deleteCardTC = (token: string, cardID: string, id: string) =>
    async (dispatch: any) => {
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.deleteCard(token, cardID);
            dispatch(setTokenAC(data.token));
            if(data.success) {
                const data2 = await cardsAPI.getCards(data.token, id);
                dispatch(getCardsAC(data2.cards))
            }
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };


export default cardsReducer;