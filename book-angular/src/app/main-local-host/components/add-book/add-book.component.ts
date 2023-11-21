import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Store } from '@ngrx/store'
import { statusError } from 'src/app/Store/StatusHanndle/Status.action'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  constructor(private store: Store) {}
  @Input() isOpen: boolean = false
  @Output() closeDrawer: EventEmitter<void> = new EventEmitter<void>()
  @Output() addBook: EventEmitter<any> = new EventEmitter<any>()

  onClose() {
    this.closeDrawer.emit()
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('bg-opacity-20')) {
      this.onClose()
    }
  }

  onInnerDivClick(event: MouseEvent) {
    event.stopPropagation()
  }
  book: any = {
    title: '',
    description: '',
    image: '',
    author: '',
    releaseYear: null,
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.addBook.emit(this.book)
    } else {
      this.store.dispatch(statusError({ error: 'Please fill in all fields.' }))
      setTimeout(() => {
        this.store.dispatch(statusError({ error: '' }))
      }, 2000)
    }
  }

  isFormValid(): boolean {
    return (
      this.book.title.trim() !== '' &&
      this.book.description.trim() !== '' &&
      this.book.image.trim() !== '' &&
      this.book.releaseYear !== null &&
      this.book.author !== ''
    )
  }
}
