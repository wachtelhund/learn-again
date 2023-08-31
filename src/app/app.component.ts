import { Component, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listedNames = new BehaviorSubject<string[]>([]);
  addToList(name: string) {
    const exists = this.listedNames.value.some((n) => n === name)
    if (!exists) {
      this.listedNames.next([name, ...this.listedNames.value]);
    }
  }
}
