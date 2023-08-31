import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nameform',
  templateUrl: './nameform.component.html',
  styleUrls: ['./nameform.component.scss']
})
export class NameformComponent {
  name = new FormControl<any>('')
  @Output() nameAdded = new EventEmitter<string>();

  ngOnInit() {
  }

  submitForm() {
    if (!this.name.valid) {
      return;
    }
    this.nameAdded.emit(this.name.value);
  }
}
