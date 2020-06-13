import {
    CardsDeckType,
    CardsType,
    IMyProfileType, IUserProfile
} from "./types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./store";


export const actions = {
    //****************************common features reducer****************************
    isLoadingAC: (value: boolean) => ({type: 'commonFeatures_reducer/IS_LOADING', value}as const),
    isErrorAC: (value: boolean, message: string) => ({type: 'commonFeatures_reducer/IS_ERROR', value,message}as const),

    //****************************auth reducer****************************
    setTokenAC: (token: string) => ({type: 'auth_reducer/SET_TOKEN', token}as const),
    loginizationSuccessAC: (loginSuccess: boolean, myName:string, token:string, id: string) =>
        ({type: 'auth_reducer/LOGIN_SUCCESS', loginSuccess, myName, token, id}as const),

    //****************************all users reducer****************************
    setAllUsers: (newUsers: IUserProfile[]) => ({type: 'auth_reducer/SET_ALL_USERS', newUsers}as const),

    //****************************cards reducer****************************
    editCardAC: (updatedCard: CardsType) => ({type: 'cards_reducer/EDIT_CARD', updatedCard}as const),
    setCardAC: (cardId: string) => ({type: 'cards_reducer/SET_CARD', cardId}as const),
    createCardAC: (newCard: CardsType, successBoolean: boolean) =>
        ({type: 'cards_reducer/CREATE_CARD', newCard, successBoolean}as const),
    getCardsAC: (cards: Array<CardsType>, cardsTotalCount: number,pageCount: number, page: number) =>
        ({type: 'cards_reducer/SET_CARDS', cards, cardsTotalCount, pageCount, page}as const),

    //****************************cardsDeck reducer****************************
    setCardPageAC: (page: number) => ({type: 'cardsDeck_reducer/SET_CARD_PAGE', page}as const),
    setCardsDecksAC: (decks: Array<CardsDeckType>,cardPacksTotalCount: number,pageCount: number, page: number) =>
        ({type: 'cardsDeck_reducer/GET_DECKS', decks, cardPacksTotalCount, pageCount, page}as const),
    setDeckPageAC: (page: number) => ({type: 'cardsDeck_reducer/SET_DECK_PAGE', page}as const),
    setCurrentDeckIdAC: (deckId: string) => ({type: 'cardsDeck_reducer/GET_DECK_ID', deckId}as const),
    setCurrentDeckNameAC: (deckName: string) => ({type: 'cardsDeck_reducer/SET_DECK_NAME', deckName}as const),
    setNewCardsDeckAC: (newCardsDeck: CardsDeckType) =>
        ({type: 'cardsDeck_reducer/CREATE_DECK', cardsDeck: newCardsDeck}as const),

    //****************************new Password reducer****************************
    setNewPasswordSuccessAC: (recoverSuccess: boolean) =>
        ({type: 'newPswd_reducer/NEW_PASSWORD_SUCCESS', recoverSuccess}as const),
    setNewPasswordErrorAC: (errorMessage: string) =>
         ({type: 'newPswd_reducer/NEW_PASSWORD_ERROR', errorMessage}as const),
    setMyProfileAC: (updatedUser: IMyProfileType) => ({type: 'profile_reducer/SET_MY_PROFILE', updatedUser}as const),
    setMyDecksAC: (decks: Array<CardsDeckType>) => ({type: 'profile_reducer/SET_MY_DECKS', decks}as const),

    //****************************password recover reducer****************************
    passwordRecoverSuccessAC: (recoverSuccess: boolean) =>
        ({type: 'pswdRecover_reducer/PASSWORD_RECOVER_SUCCESS', recoverSuccess}as const),

    //****************************registration reducer****************************
    registrationSuccessAC: (registeredSuccess: boolean) =>
        ({type: 'registr_reducer/REGISTRATE_SUCCESS', registeredSuccess}as const),
    registrationErrorAC: (errorMessage: string) => ({type: 'registr_reducer/REGISTRATE_ERROR', errorMessage}as const),

}
export type ThunkType = ThunkAction<void, RootState, unknown, ActionTypes>
type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type ActionTypes = InferActionTypes<typeof actions>

