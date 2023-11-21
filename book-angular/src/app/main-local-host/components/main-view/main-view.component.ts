import { Component } from '@angular/core'
import { LocalStorageService } from '../../services/local-storage.service'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Store } from '@ngrx/store'
import { GetLocalData } from 'src/app/Store/LocalStorage/Local.selector'
import { CreateNewStorageBook } from 'src/app/Store/LocalStorage/Local.action'
import {
  statusError,
  statusSuccses,
} from 'src/app/Store/StatusHanndle/Status.action'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewLocalComponent {
  books?: any
  searchQuery: string = ''
  isDrawerOpen: boolean = false

  constructor(
    private localStorageService: LocalStorageService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.select(GetLocalData).subscribe((data) => {
      this.books = data
    })
  }

  onSearchQueryChange(query: string) {
    this.books = this.books.filter((val: any) => {
      if (query !== '') {
        return val.title.toLowerCase().includes(query.toLowerCase())
      }
    })
    if (query === '') {
      this.store.select(GetLocalData).subscribe((data) => {
        this.books = data

        console.log(data)
      })
    }
  }

  openDrawer() {
    this.isDrawerOpen = true
    console.log('true')
  }

  closeDrawer() {
    this.isDrawerOpen = false
  }

  onAddBook(book: any) {
    let isBookExist = this.books.find((val: any) => val.title === book.title)
    if (!isBookExist) {
      let newId = Math.random() * 921
      let newBook = [...this.books, { ...book, id: String(newId) }]
      this.books = newBook
      localStorage.setItem('appData', JSON.stringify(newBook))
      this.store.dispatch(
        statusSuccses({ succses: 'Book Has Been Added Successfully' }),
      )
      setTimeout(() => {
        this.store.dispatch(statusSuccses({ succses: '' }))
      }, 2000)
      this.closeDrawer()
    } else {
      this.store.dispatch(
        statusError({ error: 'Book Already Exists On DataBase' }),
      )
      setTimeout(() => {
        this.store.dispatch(statusError({ error: '' }))
      }, 2000)
    }
  }
}
