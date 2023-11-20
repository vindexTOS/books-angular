import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-succsess',
  templateUrl: './succsess.component.html',
  styleUrls: ['./succsess.component.css'],
})
export class SuccsessComponent {
  @Input() succsessMessage: string = ''

  ngOnInit(): void {
    setTimeout(() => {
      this.succsessMessage = ''
    }, 4000)
  }
}
