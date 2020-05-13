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
  myName: string,
  authSuccess: boolean,
  errorMessage: string,
  token: string
  isLoading: boolean
}
export interface ILoading {
  isLoading: boolean
  setIsLoading: ()=>void
  points: string
  setPoints: ()=>void
}
export interface IStateCardsDeck {
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
export const IS_LOADING = 'IS_LOADING';

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



                                                    // interfaces
export interface IisLoadingActionCreator {
  type: typeof IS_LOADING
  value: boolean
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
    INewPasswordError | IisLoadingActionCreator
