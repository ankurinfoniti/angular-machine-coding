import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-list-sorter',
  imports: [],
  templateUrl: './list-sorter.html',
  styleUrl: './list-sorter.css',
})
export class ListSorter {
  fruits = input.required<string[]>();
  sort = output<string>();

  onChange(value: string) {
    this.sort.emit(value);
  }
}
