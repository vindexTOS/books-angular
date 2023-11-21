import { Component } from '@angular/core'
import {
  GetStatusError,
  GetStatusLoading,
  GetStatusSuccsess,
} from './Store/StatusHanndle/Status.selector'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store) {}
  title = 'angular-books'
  error: string = ''
  succsess: string = ''
  loading: boolean = false
  ngOnInit(): void {
    this.store.select(GetStatusError).subscribe((error) => {
      this.error = error
    })
    this.store.select(GetStatusSuccsess).subscribe((succsess) => {
      this.succsess = succsess
    })

    this.store.select(GetStatusLoading).subscribe((loading) => {
      this.loading = loading
    })
  }
}
