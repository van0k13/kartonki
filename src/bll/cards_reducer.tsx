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
    defCurrentCard, ThunkType,
} from "./types";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {cardsAPI} from "../dal/api";
import {RootState} from "./store";
import {ThunkDispatch} from "redux-thunk";


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
                return {
                    ...state, cards: action.cards, cardsTotalCount: action.cardsTotalCount,
                    page: action.page
            }
        case SET_CARD:
            return {
                ...state, currentCard: state.cards.find(c => ( c._id === action.cardId ) )
                    || defCurrentCard
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

// Action Creators
const editCardAC = (updatedCard: CardsType): IEditCardActionCreator => ({type: EDIT_CARD, updatedCard});
export const setCardAC = (cardId: string): ISetCard => ({type: SET_CARD, cardId});
export const setCardPageAC = (page: number): ISetCardPage => ({type: SET_CARD_PAGE, page});
const createCardAC = (newCard: CardsType, successBoolean: boolean): ICreateCardActionCreator =>
    ({type: CREATE_CARD, newCard, successBoolean});
const getCardsAC = (cards: Array<CardsType>, cardsTotalCount: number,
                    pageCount: number, page: number): ISetCards =>
    ({type: SET_CARDS, cards, cardsTotalCount, pageCount, page});

// Thunk
export const getCardsTC = (id: string): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>, getState: () => RootState) => {
        const {pageCount, page} = getState().cards
        const {token} = getState().auth
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.getCards(token, id, pageCount, page);
            dispatch(getCardsAC(data.cards, data.cardsTotalCount, data.pageCount, data.page));
            dispatch(setTokenAC(data.token));
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };
export const createCardTC = (card: { cardsPack_id: string, question: string }, token: string):ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>) => {
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.addCard(card, token);
            dispatch(createCardAC(data.newCard, data.success));
            dispatch(setTokenAC(data.token));
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };

export const editCardTC = (card: { answer: string, question: string, _id: string, grade: number, }): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    const {currentCard: {cardsPack_id}} = getState().cards
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.updateCard(card, token);
            dispatch(editCardAC(data.updatedCard))
            dispatch(setTokenAC(data.token))
            dispatch(getCardsTC(cardsPack_id))
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };
export const deleteCardTC = (token: string, cardID: string): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ChatActionTypes>, getState: () => RootState) => {
        const {currentCard: {cardsPack_id}} = getState().cards
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.deleteCard(token, cardID);
            dispatch(setTokenAC(data.token));
            data.success && getCardsTC(cardsPack_id)
        } catch (e) {

        }
        dispatch(isLoadingAC(false));
    };


export default cardsReducer;