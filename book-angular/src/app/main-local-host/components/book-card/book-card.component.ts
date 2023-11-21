import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorageService } from '../../services/local-storage.service'

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}
  @Input() title: string = ''
  @Input() image: string = ''
  @Input() author: string = ''
  @Input() id: string = ''
  openOptions: boolean = false
  dialog: boolean = false
  navigateToSingleBook(): void {
    this.router.navigate(['/book', this.id])
    console.log(this.id)
  }

  onOpenOptions() {
    this.openOptions = !this.openOptions
  }

  openDialog() {
    this.dialog = true
  }

  deletItem() {
    this.localStorageService.deletItem(this.id)
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
