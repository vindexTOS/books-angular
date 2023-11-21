import { createFeatureSelector, createSelector } from '@ngrx/store'

export const LocalStorageSelector = createFeatureSelector<any>(
  'localstorageselector',
)

export const GetLocalData = createSelector(LocalStorageSelector, (state) => {
  return state.bookData
})
