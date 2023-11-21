import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { RequstToGetAll } from 'src/app/Store/ApiHanndle/Api.action'
import { GetApiData } from 'src/app/Store/ApiHanndle/Api.selector'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewAPIComponent {
  constructor(private store: Store) {}
  books!: any[]
  ngOnInit() {
    this.store.dispatch(RequstToGetAll({ serachQuery: '' }))
    this.store.select(GetApiData).subscribe((data) => {
      this.books = data
      console.log(this.books)
    })
  }
}
