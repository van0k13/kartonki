import {
    CardsType,
    ChatActionTypes,
    CREATE_CARD,
    DELETE_CARD,
    EDIT_CARD,
    ICreateCardActionCreator,
    IEditCardActionCreator,
    ISetCard,
    ISetCards,
    IStateCards,
    SET_CARD,
    SET_CARDS,
} from "./types";
import {isLoadingAC, setTokenAC} from "./auth_reducer";
import {cardsAPI} from "../dal/api";


const initialState: IStateCards = {
    cards: [],
    currentCard: {
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
    },
    cardID: '',
    cardsDeckID: '',
    success: false
};


const cardsReducer = (state: IStateCards = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case SET_CARDS:
            if(action.cards.length > 0){
            return {...state, cards: action.cards}
            } else {
                return {...state}
            }
        case SET_CARD:
            return {
                ...state, currentCard: state.cards.find( c => {
                    return (c._id === action.cardId)
                })
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
export const setCardAC = (cardId: string):ISetCard => ({type:SET_CARD, cardId})
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
export const createCardTC = (card: { cardsPack_id:string, question:string }, token: string) =>
    async (dispatch: any) => {
        try {
            dispatch(isLoadingAC(true));
            const data = await cardsAPI.addCard(card, token);
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