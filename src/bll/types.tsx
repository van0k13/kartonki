
// ThunkAction
// 1 параметр - описываем, что возвращает thunk
// 2 параметр - state всего приложения
// 3 параметр - экстра аргументы
// 4 параметр - все action всего App

// ThunkDispatch
// 1 параметр - state всего приложения
// 2 параметр - экстра аргументы
// 3 параметр - все action всего App

// const getTodolists = ():ThunkType  => {
//     return (dispatch: ThunkDispatch<AppStateType, unknown, TodoActionType>,
//             getState: ()=> AppStateType) => {
//         api.getTodolists()
//             .then(res => {
//                 dispatch(getTodolistsSuccess(res.data));
//             })
//     };
// };

export type IMyProfileType = {
  email: string,
  verified: boolean,
  isAdmin: false,
  name: string,
  rememberMe: false,
  token: string,
  tokenDeathTime: number,
  __v: number,
  _id: string,
  success: boolean,
  avatar: string
}


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

export type CardsType = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  rating: number
  shots: number
  type: string
  created: string
  updated: string
  __v: number
  _id: string
}


export type CardUpdateAPIType = {
  answer: string,
  question:string,
  _id: string,
  grade:number,
}