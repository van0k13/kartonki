import {
    ChatActionTypes,
    CREATE_CARD,
    DELETE_CARD,
    EDIT_CARD, ICreateCardActionCreator,
    IDeleteCardActionCreator,
    IEditCardActionCreator,
    IStateCards,
} from "./types";



const initialState: Array<IStateCards> = [
    {
        id: '1',
        name: 'card 1',
        score: 0,
        question: 'question 1',
        answer: 'answer',
    },
    {
        id: '2',
        name: 'card 2',
        score: 0,
        question: 'question 2',
        answer: 'answer',
    },
    {
        id: '3',
        name: 'card 3',
        score: 0,
        question: 'question 3',
        answer: 'answer',
    },
];


const cardsReducer = (state:Array<IStateCards> = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case EDIT_CARD:
            return {
                ...state, item: action.item,
            };
        case DELETE_CARD:
            return {
                ...state
            };
        case CREATE_CARD:
            return {
                ...state,
            };
        default:
            return state;
    }
};

// Action Creator
const editCardAC = (item:IStateCards, cardsDeckID: string, cardID: string):IEditCardActionCreator =>
    ({type: EDIT_CARD, item, cardsDeckID, cardID});


const deleteCardAC = (cardsDeckID: string, cardId: string):IDeleteCardActionCreator =>
    ({type: DELETE_CARD, cardsDeckID, cardId});
const createCardAC = (cardsDeckID: string):ICreateCardActionCreator =>
    ({type: CREATE_CARD, cardsDeckID});


// Thunk


export default cardsReducer;