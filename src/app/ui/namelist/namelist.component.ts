import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, Input, WritableSignal, effect } from '@angular/core';
import { MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-namelist',
  templateUrl: './namelist.component.html',
  styleUrls: ['./namelist.component.scss']
})
export class NamelistComponent {
  @Input() names!: BehaviorSubject<string[]>;
  selectedNames: string[] = []

  constructor() {
  }

  ngOnInit() {
    this.names.subscribe((names) => {
      console.log('names', names);
    });
  }

  onSelectionChange(selectedOptions: MatListOption[]) {
    this.selectedNames = selectedOptions.map((option) => option.value);
  }

  onDeleteSelected() {
    const newNames = this.names.value.filter((name) => !this.selectedNames.includes(name));
    this.selectedNames = [];
    this.names.next(newNames);
  }
}
