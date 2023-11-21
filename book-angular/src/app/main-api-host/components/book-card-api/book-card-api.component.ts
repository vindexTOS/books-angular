import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { DeleteBook, RequstToGetAll } from 'src/app/Store/ApiHanndle/Api.action'

@Component({
  selector: 'app-book-card-api',
  templateUrl: './book-card-api.component.html',
  styleUrls: ['./book-card-api.component.css'],
})
export class BookCardApiComponent {
  constructor(private router: Router, private store: Store) {}
  @Input() title: string = ''
  @Input() image: string = ''
  @Input() author: string = ''
  @Input() id: string = ''
  openOptions: boolean = false
  dialog: boolean = false
  navigateToSingleBook(): void {
    this.router.navigate(['/api-book', this.id])
    console.log(this.id)
  }

  onOpenOptions() {
    this.openOptions = !this.openOptions
  }

  openDialog() {
    this.dialog = true
  }

  deletItem() {
    this.store.dispatch(DeleteBook({ id: this.id }))
    setTimeout(() => {
      this.store.dispatch(RequstToGetAll({ searchQuery: '' }))
    }, 1000)
  }

  onDialogAction(actionType: string) {
    if (actionType === 'delete') {
      this.deletItem()
      console.log('Delete action')
    } else if (actionType === 'cancel') {
      this.dialog = false
    }

    this.dialog = false
  }
}
