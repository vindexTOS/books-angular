import { createReducer, on } from '@ngrx/store'
import { initialLocalState } from './Local.state'
import { CreateNewStorageBook, GetLocalStorageData } from './Local.action'

const _LocalStorageReducer = createReducer(
  initialLocalState,
  on(GetLocalStorageData, (state, action) => {
    return { ...state, bookData: action.bookData }
  }),
  on(CreateNewStorageBook, (state, action) => {
    return { ...state, bookData: [...state.bookData, action.createBook] }
  }),
)

export function LocalStorageReducer(state: any, action: any) {
  return _LocalStorageReducer(state, action)
}
