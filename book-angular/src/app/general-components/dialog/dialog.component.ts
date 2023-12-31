import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @Output() action: EventEmitter<string> = new EventEmitter<string>()
  @Input() title: string = ''
  onAction(actionType: string) {
    this.action.emit(actionType)
  }
}
