import { BookData } from 'src/app/types/book-type'
type initialLocalStateType = {
  bookData: BookData[]
  createBook: BookData | {}
}

export const initialLocalState: initialLocalStateType = {
  bookData: [],
  createBook: {},
}
