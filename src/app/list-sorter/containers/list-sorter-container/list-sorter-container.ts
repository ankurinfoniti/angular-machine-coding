import { Component } from '@angular/core';

import { ListSorter } from '../../component/list-sorter/list-sorter';

@Component({
  selector: 'app-list-sorter-container',
  imports: [ListSorter],
  templateUrl: './list-sorter-container.html',
  styleUrl: './list-sorter-container.css',
})
export class ListSorterContainer {
  defaultFruits = ['Banana', 'Apple', 'Cherry', 'Mango', 'Blueberry', 'Kiwi', 'Pineapple', 'Fig'];
  fruits = [...this.defaultFruits];

  onSort(value: string) {
    switch (value) {
      case 'az':
        this.fruits = [...this.defaultFruits];
        this.fruits.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()));
        break;
      case 'za':
        this.fruits = [...this.defaultFruits];
        this.fruits.sort((a, b) => b.toLocaleLowerCase().localeCompare(a.toLocaleLowerCase()));
        break;
      case 'length':
        this.fruits = [...this.defaultFruits];
        this.fruits.sort((a, b) => a.length - b.length);
        break;
      default:
        this.fruits = [...this.defaultFruits];
    }
  }
}
