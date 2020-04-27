import { IState, ChatActionTypes, FIRST_ACTION, SECOND_ACTION } from "./types";

const initialState: IState = {

}


const passwordRecoveringReducer = (state: IState = initialState, action: ChatActionTypes) => {
    switch (action.type) {
        case FIRST_ACTION:
            return state
        case SECOND_ACTION:
            return state
        default:
            return state;
    }
}
export default passwordRecoveringReducer;