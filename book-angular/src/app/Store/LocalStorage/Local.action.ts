import { createAction, props } from '@ngrx/store'
import { BookData } from 'src/app/types/book-type'

export const GetLocalStorageData = createAction(
  '[get local data]local data',
  props<{ bookData: BookData[] }>(),
)
export const CreateNewStorageBook = createAction(
  '[post new book]new book',
  props<{ createBook: BookData }>(),
)
