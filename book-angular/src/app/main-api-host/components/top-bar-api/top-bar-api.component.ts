import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-top-bar-api',
  templateUrl: './top-bar-api.component.html',
  styleUrls: ['./top-bar-api.component.css'],
})
export class TopBarApiComponent {
  @Output() addNewBook: EventEmitter<void> = new EventEmitter<void>()
  @Output() search: EventEmitter<void> = new EventEmitter<void>()
  @Output() searchQueryChange: EventEmitter<string> = new EventEmitter<string>()

  onInputChange(event: any) {
    const searchQuery = event.target.value
    this.searchQueryChange.emit(searchQuery)
  }
  onAddNewBook() {
    this.addNewBook.emit()
  }

  onSearch() {
    this.search.emit()
  }
}
