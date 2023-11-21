import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { CreateBook, RequstToGetAll } from 'src/app/Store/ApiHanndle/Api.action'
import { GetApiData } from 'src/app/Store/ApiHanndle/Api.selector'
import {
  statusError,
  statusSuccses,
} from 'src/app/Store/StatusHanndle/Status.action'

@Component({
  selector: 'app-main-view-api',
  templateUrl: './main-view-api.component.html',
  styleUrls: ['./main-view-api.component.css'],
})
export class MainViewAPIComponent {
  constructor(private store: Store) {}
  books!: any[]

  searchQuery: string = ''
  isDrawerOpen: boolean = false
  ngOnInit() {
    this.store.dispatch(RequstToGetAll({ searchQuery: '' }))
    this.store.select(GetApiData).subscribe((data) => {
      this.books = data
    })
  }

  onSearchQueryChange(query: string) {
    this.searchQuery = query
  }

  sendSearchRequest() {
    this.store.dispatch(RequstToGetAll({ searchQuery: this.searchQuery }))
  }

  openDrawer() {
    this.isDrawerOpen = true
  }

  closeDrawer() {
    this.isDrawerOpen = false
  }

  async onAddBook(book: any) {
    this.store.dispatch(CreateBook({ newBook: book }))
    setTimeout(() => {
      this.store.dispatch(RequstToGetAll({ searchQuery: '' }))
      this.closeDrawer()
      this.store.dispatch(statusError({ error: '' }))
    }, 1000)
  }
}
