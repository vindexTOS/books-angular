import { Store } from '@ngrx/store'
import { Injectable } from '@angular/core'
import { catchError, map, switchMap } from 'rxjs/operators'
import { from, mergeMap, of, tap } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import {
  loadingEnd,
  loadingStart,
  statusError,
  statusSuccses,
} from '../StatusHanndle/Status.action'
import {
  CreateBook,
  DeleteBook,
  GetBookDataFromApi,
  GetSIngleBookData,
  RequstToGetAll,
  SingleBook,
} from './Api.action'
import { ApiService } from 'src/app/main-api-host/services/api.service'

@Injectable()
export class APIEffect {
  constructor(
    private actions$: Actions,
    private store: Store,
    private ApiService: ApiService,
  ) {}

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteBook),
      mergeMap((action: any) => {
        this.store.dispatch(loadingStart())
        let id: string = action.id as string

        return this.ApiService.DeleteBook({ id }).pipe(
          map((res: any) => {
            this.store.dispatch(loadingEnd())
            return statusSuccses({ succses: 'Book Has Been Deleted' })
          }),
          catchError((error) => {
            this.store.dispatch(loadingEnd())

            console.error('Error during book deletion:', error)

            const errorMessage =
              error.error?.message || 'An error occurred during book deletion'

            return of(statusError({ error: errorMessage }))
          }),
        )
      }),
    ),
  )

  createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateBook),
      mergeMap((action: any) => {
        this.store.dispatch(loadingStart())
        return this.ApiService.CreateBook(action.newBook).pipe(
          map((res: any) => {
            this.store.dispatch(loadingEnd())
            return statusSuccses({ succses: 'Book Has Been Created' })
          }),
          catchError((error) => {
            this.store.dispatch(loadingEnd())
            const errorMessage =
              error.error?.message === 'Internal Server Error'
                ? 'Book Already Exists On DataBase'
                : 'internal server error'

            console.log(error)
            return of(statusError({ error: errorMessage }))
          }),
        )
      }),
    ),
  )

  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RequstToGetAll),
      mergeMap((action: any) => {
        this.store.dispatch(loadingStart())
        return this.ApiService.GetData(action.searchQuery).pipe(
          map((res: any) => {
            this.store.dispatch(loadingEnd())
            this.store.dispatch(GetBookDataFromApi({ data: res.data }))
            return statusSuccses({ succses: '' })
          }),
          catchError((error) => {
            this.store.dispatch(loadingEnd())
            console.log(error)
            return of(statusError({ error: 'Internal Server Error' }))
          }),
        )
      }),
    ),
  )

  getSingleBook = createEffect(() =>
    this.actions$.pipe(
      ofType(GetSIngleBookData),
      mergeMap((action: any) => {
        this.store.dispatch(loadingStart())
        let id: string = action.id as string
        return this.ApiService.GetSingleBook({ id }).pipe(
          map((res: any) => {
            this.store.dispatch(loadingEnd())
            return SingleBook({ singleBookData: res })
          }),
          catchError((error) => {
            this.store.dispatch(loadingEnd())
            return of(statusError({ error: 'Internal Server Error' }))
          }),
        )
      }),
    ),
  )
}
