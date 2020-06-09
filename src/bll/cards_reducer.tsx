import {ThunkType} from "./actions";
import {cardsAPI} from "../dal/api";
import {RootState} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {actions, ActionTypes} from "./actions";
import {CardsType} from "./types";

const defCurrentCard = {
    answer: "default",
    question: "default",
    cardsPack_id: "default",
    grade: 0.00,
    rating: 0,
    shots: 0,
    type: "card",
    created: "2020-05-13T11:05:44.867Z",
    updated: "2020-05-13T11:05:44.867Z",
    __v: 0,
    _id: "default",
}
const initialState = {
    cards: [] as Array<CardsType>,
    currentCard: defCurrentCard,
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 1,
    pageCount: 5,
    cardID: '',
    cardsDeckID: '',
    success: false
};
export type initialStateType = typeof initialState

const cardsReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'cards_reducer/SET_CARDS':
                return {
                    ...state, cards: action.cards, cardsTotalCount: action.cardsTotalCount,
                    page: action.page
            }
        case 'cards_reducer/SET_CARD':
            return {
                ...state, currentCard: state.cards.find(c => c._id === action.cardId )
                    || defCurrentCard
            }
        case 'cardsDeck_reducer/SET_CARD_PAGE':
            return {
                ...state, page: action.page
            }
        case 'cards_reducer/EDIT_CARD':
            return {
                ...state, currentCard: action.updatedCard,
            };
        case 'cards_reducer/CREATE_CARD':
            return {
                ...state, cards: [...state.cards, action.newCard], success: action.successBoolean
            };
        default:
            return state;
    }
};

// Thunk
export const getCardsTC = (id: string): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
        const {pageCount, page} = getState().cards
        const {token} = getState().auth
        try {
            dispatch(actions.isLoadingAC(true));
            const data = await cardsAPI.getCards(token, id, pageCount, page);
            dispatch(actions.getCardsAC(data.cards, data.cardsTotalCount, data.pageCount, data.page));
            dispatch(actions.setTokenAC(data.token));
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false));
    };
export const createCardTC = (card: { cardsPack_id: string, question: string }, token: string):ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
        try {
            dispatch(actions.isLoadingAC(true));
            const data = await cardsAPI.addCard(card, token);
            dispatch(actions.createCardAC(data.newCard, data.success));
            dispatch(actions.setTokenAC(data.token));
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false));
    };

export const editCardTC = (card: { answer: string, question: string, _id: string, grade: number, }): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
        try {
            dispatch(actions.isLoadingAC(true));
            const data = await cardsAPI.updateCard(card, token);
            dispatch(actions.editCardAC(data.updatedCard))
            dispatch(actions.setTokenAC(data.token))
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false));
    };
export const deleteCardTC = (token: string, cardID: string): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
        const {currentCard: {cardsPack_id}} = getState().cards
        try {
            dispatch(actions.isLoadingAC(true));
            const data = await cardsAPI.deleteCard(token, cardID);
            dispatch(actions.setTokenAC(data.token));
            data.success && getCardsTC(cardsPack_id)
        } catch (e) {
            dispatch(actions.isErrorAC(true, e.response.data.error))
        }
        dispatch(actions.isLoadingAC(false));
    };


export default cardsReducer;