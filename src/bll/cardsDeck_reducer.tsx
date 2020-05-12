import {
    ChatActionTypes,
    CREATE_DECK,
    DELETE_DECK,
    ICreateDeleteDeckActionCreator,
    IStateCards,
} from "./types";



const initialState: Array<IStateCards> = [];


const cardsDeckReducer = (state:Array<IStateCards> = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case CREATE_DECK:
            return {
                ...state
            };
        case DELETE_DECK:
            return {
                ...state
            };
        default:
            return state;
    }
};

// Action Creator
const createDeckAC = (cardsDeckID: string):ICreateDeleteDeckActionCreator =>
    ({type: CREATE_DECK, cardsDeckID});
const deleteDeckAC = (cardsDeckID: string):ICreateDeleteDeckActionCreator =>
    ({type: DELETE_DECK, cardsDeckID});


// Thunk


export default cardsDeckReducer;