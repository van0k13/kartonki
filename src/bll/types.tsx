export interface IState {

}
export interface IStatePasswordRecover {
  success: boolean
  message: string
}
export interface IStateRegistr {
  message: string,
  registeredSuccess: boolean
}
export interface IStateLogin {
  id: string,
  myName: string,
  authSuccess: boolean,
  errorMessage: string,
  token: string
  isLoading: boolean
}
export interface IStateCards {
  id: string
  name: string
  score: number
  question: string,
  answer: string
}
export type IStateCardsDeck  = {
  decks: Array<CardsDeckType>
}

export const FIRST_ACTION = 'FIRST_ACTION'
export const SECOND_ACTION = 'SECOND_ACTION'
export const REGISTRATE_SUCCESS = 'registr_reducer/REGISTRATE_SUCCESS'
export const REGISTRATE_ERROR = 'registr_reducer/REGISTRATE_ERROR'
export const LOGIN_ERROR = 'auth_reducer/LOGIN_ERROR'
export const LOGIN_SUCCESS = 'auth_reducer/LOGIN_SUCCESS'
export const PASSWORD_RECOVER_SUCCESS = 'PASSWORD_RECOVER_SUCCESS';
export const PASSWORD_RECOVER_ERROR = 'PASSWORD_RECOVER_ERROR';
export const NEW_PASSWORD_SUCCESS = 'NEW_PASSWORD_SUCCESS';
export const NEW_PASSWORD_ERROR = 'NEW_PASSWORD_ERROR';
export const IS_LOADING = 'auth_reducer/IS_LOADING';
export const SET_TOKEN = 'auth_reducer/SET_TOKEN';
export const EDIT_CARD = 'cards_reducer/EDIT_CARD';
export const DELETE_CARD = 'cards_reducer/DELETE_CARD';
export const CREATE_CARD = 'cards_reducer/CREATE_CARD';
export const GET_DECKS = 'cardsDeck_reducer/GET_DECKS';
export const CREATE_DECK = 'cardsDeck_reducer/CREATE_DECK';
export const DELETE_DECK = 'cardsDeck_reducer/DELETE_DECK';

                                                      // typos

export type CardsDeckType = {
  _id: string
  user_id: string
  name: string
  path: string // папка
  grade: number // средняя оценка карточек
  shots: number // количество попыток
  rating: number // лайки
  type:  string//"pack " // ещё будет "folder" (папка)
  created: string
  updated: string
}

export interface IGetCardsDecks {
  type: typeof GET_DECKS
  decks: Array<CardsDeckType>
}
export interface ICreateDeleteDeckActionCreator {
  type: typeof CREATE_DECK | typeof DELETE_DECK
  cardsDeck: CardsDeckType
}
export interface ICreateCardActionCreator {
  type: typeof CREATE_CARD
  cardsDeckID: string
}
export interface IDeleteCardActionCreator {
  type: typeof DELETE_CARD
  cardsDeckID: string
  cardId: string
}
export interface IEditCardActionCreator {
  type: typeof EDIT_CARD
  item:IStateCards
  cardsDeckID: string
  cardID: string
}
export interface IisLoadingActionCreator {
  type: typeof IS_LOADING
  value: boolean
}
export interface ISetToken {
  type: typeof SET_TOKEN
  token: string
}
export interface firstActionCreator {
  type: typeof FIRST_ACTION
  payload: any
}
export interface secondActionCreator {
  type: typeof SECOND_ACTION
  payload: any
}
export interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS,
  id: string,
  loginSuccess: boolean,
  myName: string,
  token: string
}
export interface ILoginError {
  type: typeof LOGIN_ERROR,
  errorMessage: string
}
export interface IRegistrateSuccess {
  type: typeof REGISTRATE_SUCCESS,
  registeredSuccess:boolean
}
export interface IRegistrateError {
  type: typeof REGISTRATE_ERROR,
  errorMessage: string
}
export interface IPasswordRecoverSuccess {
  type: typeof PASSWORD_RECOVER_SUCCESS,
  recoverSuccess: boolean
}
export interface IPasswordRecoverError {
  type: typeof PASSWORD_RECOVER_ERROR,
  errorMessage: string
}
export interface INewPasswordSuccess {
  type: typeof NEW_PASSWORD_SUCCESS,
  recoverSuccess: boolean
}
export interface INewPasswordError {
  type: typeof NEW_PASSWORD_ERROR,
  errorMessage: string
}

export type ChatActionTypes = firstActionCreator| secondActionCreator| IRegistrateSuccess | IRegistrateError |
    IPasswordRecoverSuccess | IPasswordRecoverError | ILoginSuccess | ILoginError | INewPasswordSuccess |
    INewPasswordError | IisLoadingActionCreator | IEditCardActionCreator | IDeleteCardActionCreator |
    ICreateCardActionCreator | ICreateDeleteDeckActionCreator | IGetCardsDecks | ISetToken
