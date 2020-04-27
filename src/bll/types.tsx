export interface IState {

}

export const FIRST_ACTION = 'FIRST_ACTION_CREATOR'
export const SECOND_ACTION = 'SECOND_ACTION_CREATOR'

interface firstActionCreator {
  type: typeof FIRST_ACTION
  payload: any
}

interface secondActionCreator {
  type: typeof SECOND_ACTION
  payload: any
}

export type ChatActionTypes = firstActionCreator | secondActionCreator