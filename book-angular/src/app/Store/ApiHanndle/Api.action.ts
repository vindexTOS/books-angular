import { createAction, props } from '@ngrx/store'
import { BookData } from 'src/app/types/book-type'

export const RequstToGetAll = createAction(
  '[get book from api]get api',
  props<{ searchQuery: string }>(),
)

export const GetBookDataFromApi = createAction(
  '[get book data]get book data',
  props<{ data: BookData[] }>(),
)

export const GetSIngleBookData = createAction(
  '[get single book]get single',
  props<{ id: string }>(),
)

export const SingleBook = createAction(
  '[store single book]store single',
  props<{ singleBookData: BookData }>(),
)

export const CreateBook = createAction(
  '[create book]crete post',
  props<{ newBook: BookData }>(),
)

export const DeleteBook = createAction(
  '[delete book]delete post',
  props<{ id: string }>(),
)
