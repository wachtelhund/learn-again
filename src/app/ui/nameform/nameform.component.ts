import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nameform',
  templateUrl: './nameform.component.html',
  styleUrls: ['./nameform.component.scss']
})
export class NameformComponent {
  name = new FormControl<string>('')

  ngOnInit() {
  }

  submitForm() {
    console.log(this.name);
  }
}
