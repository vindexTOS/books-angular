import { BookData } from 'src/app/types/book-type'

export type InitialApiStateType = {
  data: BookData[]
  singleBook: BookData | {}
}

export const initialApiState: InitialApiStateType = {
  data: [],
  singleBook: {},
}
