import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-read-more',
  imports: [SlicePipe],
  templateUrl: './read-more.html',
  styleUrl: './read-more.css',
})
export class ReadMore {
  text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;

  isReadMore = false;

  toggleReadMore() {
    this.isReadMore = !this.isReadMore;
  }
}
