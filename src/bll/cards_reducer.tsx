import {
    CardsType,
    ChatActionTypes,
    CREATE_CARD,
    DELETE_CARD,
    EDIT_CARD, ICreateCardActionCreator,
    IEditCardActionCreator, ISetCards,
    IStateCards, SET_CARDS,
} from "./types";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {cardsAPI} from "../dal/api";


const initialState: IStateCards = {
    cards: [
        {
            answer: "no answer",
            question: "That Deck is empty",
            cardsPack_id: "5eb6a2f72f849402d46c6ac4",
            grade: 3.33,
            rating: 0,
            shots: 1,
            type: "card",
            created: "2020-05-13T11:05:44.867Z",
            updated: "2020-05-13T11:05:44.867Z",
            __v: 0,
            _id: "5ebbd48876810f1ad0e7ece3",
        }
    ],
    cardID: '',
    cardsDeckID: '',
    success: false
};


const cardsReducer = (state: IStateCards = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case SET_CARDS:
            if (action.cards.length > 0)
            return {
                ...state, cards: action.cards
            }
        case EDIT_CARD:
            return {
                ...state, cards: action.cards,
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
const editCardAC = (cards: Array<CardsType>, cardsDeckID: string, cardID: string): IEditCardActionCreator =>
    ({type: EDIT_CARD, cards, cardsDeckID, cardID});

// const deleteCardAC = (cardsDeckID: string, cardId: string): IDeleteCardActionCreator =>
//     ({type: DELETE_CARD, cardsDeckID, cardId});
const createCardAC = (newCard: CardsType, successBoolean: boolean): ICreateCardActionCreator =>
    ({type: CREATE_CARD, newCard, successBoolean});
const getCardsAC = (cards: Array<CardsType>): ISetCards => ({type: SET_CARDS, cards});

// Thunk
export const getCardsTC = (token: string, id: string) =>
    async (dispatch: any) => {
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.getCards(token, id);
            dispatch(getCardsAC(data.cards));
            dispatch(setTokenAC(data.token));
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