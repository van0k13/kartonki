export interface IState {

}
export interface IStateRegistr {
  message: string,
  registeredSuccess: boolean
}
export interface IStatePasswordRecover {
  success: boolean
  message: string
}
export const REGISTRATE_SUCCESS = 'registr_reducer/REGISTRATE_SUCCESS';
export const REGISTRATE_ERROR = 'registr_reducer/REGISTRATE_ERROR';
export const FIRST_ACTION = 'FIRST_ACTION';
export const SECOND_ACTION = 'SECOND_ACTION';
export const PASSWORD_RECOVER_SUCCESS = 'PASSWORD_RECOVER_SUCCESS';
export const PASSWORD_RECOVER_ERROR = 'PASSWORD_RECOVER_ERROR';


export interface firstActionCreator {
  type: typeof FIRST_ACTION
  payload: any
}
export interface secondActionCreator {
  type: typeof SECOND_ACTION
  payload: any
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

export type ChatActionTypes = firstActionCreator| secondActionCreator| IRegistrateSuccess | IRegistrateError | IPasswordRecoverSuccess | IPasswordRecoverError