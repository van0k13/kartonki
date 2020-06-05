import {ThunkType} from "./actions";
import {cardsAPI} from "../dal/api";
import {RootState} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {actions, ActionTypes} from "./actions";

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


const cardsReducer = (state: typeof initialState = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'cards_reducer/SET_CARDS':
                return {
                    ...state, cards: action.cards, cardsTotalCount: action.cardsTotalCount,
                    page: action.page
            }
        case 'cards_reducer/SET_CARD':
            return {
                ...state, currentCard: state.cards.find(({_id}) => ( _id === action.cardId ) )
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

// Action Creators
// const editCardAC = (updatedCard: CardsType): IEditCardActionCreator => ({type: EDIT_CARD, updatedCard});
// export const setCardAC = (cardId: string): ISetCard => ({type: SET_CARD, cardId});
// export const setCardPageAC = (page: number): ISetCardPage => ({type: SET_CARD_PAGE, page});
// const createCardAC = (newCard: CardsType, successBoolean: boolean): ICreateCardActionCreator =>
//     ({type: CREATE_CARD, newCard, successBoolean});
// const getCardsAC = (cards: Array<CardsType>, cardsTotalCount: number,
//                     pageCount: number, page: number): ISetCards =>
//     ({type: SET_CARDS, cards, cardsTotalCount, pageCount, page});

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

        }
        dispatch(actions.isLoadingAC(false));
    };

export const editCardTC = (card: { answer: string, question: string, _id: string, grade: number, }): ThunkType =>
    async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>, getState: () => RootState) => {
    const {token} = getState().auth
    const {currentCard: {cardsPack_id}} = getState().cards
        try {
            dispatch(actions.isLoadingAC(true));
            const data = await cardsAPI.updateCard(card, token);
            dispatch(actions.editCardAC(data.updatedCard))
            dispatch(actions.setTokenAC(data.token))
            dispatch(getCardsTC(cardsPack_id))
        } catch (e) {

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

        }
        dispatch(actions.isLoadingAC(false));
    };


export default cardsReducer;