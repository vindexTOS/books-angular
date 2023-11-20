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
  navigateToSingleBook(): void {
    this.router.navigate(['/book', this.id])
    console.log(this.id)
  }

  onOpenOptions() {
    this.openOptions = !this.openOptions
  }

  deletItem() {
    this.localStorageService.deletItem(this.id)
  }
}
