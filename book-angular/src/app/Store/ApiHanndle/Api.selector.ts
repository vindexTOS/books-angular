import { createFeatureSelector, createSelector } from '@ngrx/store'
import { InitialApiStateType } from './Api.state'

export const ApiBookDataSelector = createFeatureSelector<InitialApiStateType>(
  'apidataselector',
)

export const GetApiData = createSelector(ApiBookDataSelector, (state) => {
  return state.data
})

export const GetSingleData = createSelector(ApiBookDataSelector, (state) => {
  return state.singleBook
})
