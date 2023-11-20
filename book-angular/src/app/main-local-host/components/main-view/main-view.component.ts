import { Component } from '@angular/core'
import { LocalStorageService } from '../../services/local-storage.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewLocalComponent {
  books?: any

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.books = this.localStorageService.jsonData
    console.log(this.localStorageService.jsonData)
  }
}
