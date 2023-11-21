import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { Subject, filter } from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  routeName = ''
  constructor(private router: Router) {}
  private destroy$ = new Subject<void>()

  ngOnInit() {
    this.routeName = this.router.url
    console.log(this.routeName)
  }

  navigate(link: string) {
    this.router.navigate([link]).then(() => {
      this.ngOnInit()
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
