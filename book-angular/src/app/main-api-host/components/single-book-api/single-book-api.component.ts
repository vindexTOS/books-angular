import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { GetSIngleBookData } from 'src/app/Store/ApiHanndle/Api.action'
import { GetSingleData } from 'src/app/Store/ApiHanndle/Api.selector'

@Component({
  selector: 'app-single-book-api',
  templateUrl: './single-book-api.component.html',
  styleUrls: ['./single-book-api.component.css'],
})
export class SingleBookApiComponent {
  constructor(private route: ActivatedRoute, private store: Store) {}
  id!: string
  book: any
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const bookId = params['id']
      this.store.dispatch(GetSIngleBookData({ id: bookId }))
    })

    this.store.select(GetSingleData).subscribe((data) => {
      this.book = data
    })
  }
}
