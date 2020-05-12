import { createStore, applyMiddleware, combineReducers } from "redux";
import authReducer from './auth_reducer';
import thunkMiddleware from 'redux-thunk'
import newPasswordReducer from "./newPswd_reducer";
import profileReducer from "./profile_reducer";
import passwordRecoveringReducer from "./pswdRecover_reducer";
import registrationReducer from "./registr_reducer";

const reducerPack = combineReducers({
    auth: authReducer,
    newPass: newPasswordReducer,
    profile: profileReducer,
    recoverPass: passwordRecoveringReducer,
    registr: registrationReducer
})
export type RootState = ReturnType<typeof reducerPack>

const store = createStore(reducerPack, applyMiddleware(thunkMiddleware) );


export default store;