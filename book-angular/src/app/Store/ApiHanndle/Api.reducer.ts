import { createReducer, on } from '@ngrx/store'
import { initialApiState } from './Api.state'
import { GetBookDataFromApi, SingleBook } from './Api.action'

const _ApiReducer = createReducer(
  initialApiState,
  on(GetBookDataFromApi, (state, action) => {
    return { ...state, data: action.data }
  }),
  on(SingleBook, (state, action) => {
    return { ...state, singleBook: action.singleBookData }
  }),
)

export function ApiReducer(state: any, action: any) {
  return _ApiReducer(state, action)
}
