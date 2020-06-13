import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from './auth_reducer';
import thunkMiddleware from 'redux-thunk'
import newPasswordReducer from "./newPswd_reducer";
import profileReducer from "./profile_reducer";
import passwordRecoveringReducer from "./pswdRecover_reducer";
import registrationReducer from "./registr_reducer";
import cardsReducer from "./cards_reducer";
import cardsDeckReducer from "./cardsDeck_reducer";
import globalFeaturesReducer from "./commonFeatures_reducer";
import allUsersReducer from "./allUsers_reducer";

const reducerPack = combineReducers({
    auth: authReducer,
    newPass: newPasswordReducer,
    profile: profileReducer,
    recoverPass: passwordRecoveringReducer,
    registr: registrationReducer,
    cards: cardsReducer,
    decks: cardsDeckReducer,
    features: globalFeaturesReducer,
    allUsers: allUsersReducer
})
export type RootState = ReturnType<typeof reducerPack>;


const store = createStore(reducerPack, applyMiddleware(thunkMiddleware) );


export default store;