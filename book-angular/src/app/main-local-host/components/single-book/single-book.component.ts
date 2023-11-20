import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { LocalStorageService } from '../../services/local-storage.service'

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css'],
})
export class SingleBookComponent {
  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
  ) {}
  id!: string
  book: any
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const bookId = params['id']
      this.book = this.localStorageService.jsonData.find(
        (val: any) => val.id == bookId,
      )
    })
  }
}
