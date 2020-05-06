export interface IState {

}
export interface IStateRegistr {
  message: string,
  registeredSuccess: boolean
}
export interface IStateLogin {
  myName: string,
  authSuccess: boolean,
  errorMessage: string
}


export const REGISTRATE_SUCCESS = 'registr_reducer/REGISTRATE_SUCCESS'
export const REGISTRATE_ERROR = 'registr_reducer/REGISTRATE_ERROR'
export const LOGIN_ERROR = 'auth_reducer/LOGIN_ERROR'
export const LOGIN_SUCCESS = 'auth_reducer/LOGIN_SUCCESS'
export const FIRST_ACTION = 'FIRST_ACTION'
export const SECOND_ACTION = 'SECOND_ACTION'



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
  myName: string
}
export interface ILoginError {
  type: typeof LOGIN_ERROR,
  errorMessage: string
}
export interface IRegistrateSuccess {
  type: typeof REGISTRATE_SUCCESS,
  registeredSuccess: boolean
}
export interface IRegistrateError {
  type: typeof REGISTRATE_ERROR,
  errorMessage: string
}

export type ChatActionTypes = firstActionCreator| secondActionCreator| IRegistrateSuccess | IRegistrateError |
    ILoginSuccess | ILoginError