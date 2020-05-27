import {
    CardsType,
    ChatActionTypes,
    CREATE_CARD,
    EDIT_CARD,
    ICreateCardActionCreator,
    IEditCardActionCreator,
    ISetCard,
    ISetCardPage,
    ISetCards,
    IStateCards,
    SET_CARD,
    SET_CARD_PAGE,
    SET_CARDS,
} from "./types";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {cardsAPI} from "../dal/api";
import {RootState} from "./store";
import {Dispatch} from "redux";

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
const initialState: IStateCards = {
    cards: [],
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


const cardsReducer = (state: IStateCards = initialState, action: ChatActionTypes): IStateCards => {
    switch (action.type) {
        case SET_CARDS:
            if (action.cards.length > 0) {
                return {
                    ...state, cards: action.cards, cardsTotalCount: action.cardsTotalCount,
                    page: action.page
                }
            } else {
                return {...state}
            }
        case SET_CARD:
            return {
                ...state, currentCard: state.cards.find(c => {
                    return (c._id === action.cardId)
                }) || defCurrentCard
            }
        case SET_CARD_PAGE:
            return {
                ...state, page: action.page
            }
        case EDIT_CARD:
            return {
                ...state, currentCard: action.updatedCard,
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
const editCardAC = (updatedCard: CardsType): IEditCardActionCreator =>
    ({type: EDIT_CARD, updatedCard});
export const setCardAC = (cardId: string): ISetCard => ({type: SET_CARD, cardId});
export const setCardPageAC = (page: number): ISetCardPage => ({type: SET_CARD_PAGE, page});
const createCardAC = (newCard: CardsType, successBoolean: boolean): ICreateCardActionCreator =>
    ({type: CREATE_CARD, newCard, successBoolean});
const getCardsAC = (cards: Array<CardsType>, cardsTotalCount: number,
                    pageCount: number, page: number): ISetCards =>
    ({type: SET_CARDS, cards, cardsTotalCount, pageCount, page});

// Thunk
export const getCardsTC = (token: string, id: string) =>
    async (dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
        const {pageCount, page} = getState().cards
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.getCards(token, id, pageCount, page);
            dispatch(getCardsAC(data.cards, data.cardsTotalCount, data.pageCount, data.page));
            dispatch(setTokenAC(data.token));
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };
export const createCardTC = (card: { cardsPack_id: string, question: string }, token: string) =>
    async (dispatch: Dispatch<ChatActionTypes>) => {
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.addCard(card, token);
            dispatch(createCardAC(data.newCard, data.success));
            dispatch(setTokenAC(data.token));
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };
export const editCardTC = (card: { answer?: string, question?: string, _id: string, grade?: number, }) =>
    async (dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.updateCard(card, getState().auth.token);
            dispatch(editCardAC(data.updatedCard))
            dispatch(setTokenAC(data.token))
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };
export const deleteCardTC = (token: string, cardID: string, id: string) =>
    async (dispatch: Dispatch<ChatActionTypes>, getState: () => RootState) => {
        const {pageCount, page} = getState().cards
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.deleteCard(token, cardID);
            dispatch(setTokenAC(data.token));
            if (data.success) {
                const data2 = await cardsAPI.getCards(data.token, id, pageCount, page);
                dispatch(getCardsAC(data2.cards, data.cardsTotalCount, data.pageCount, data.page))
            }
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };


export default cardsReducer;