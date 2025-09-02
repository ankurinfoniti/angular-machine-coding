import { Component, signal } from '@angular/core';

import { AccordionSingle } from '../../components/accordion-single/accordion-single';
import { AccordionItem } from '../../model/accordion';

@Component({
  selector: 'app-accordian',
  imports: [AccordionSingle],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {
  items: AccordionItem[] = [
    {
      title: 'JavaScript Basics',
      content: 'Learn variables, functions, and loops in JavaScript.',
    },
    {
      title: 'React.js Overview',
      content: 'Understand components, state, and props in React.',
    },
    {
      title: 'Node.js',
      content: 'Basics of server-side development with Node.js.',
    },
    {
      title: 'Full-Stack Development',
      content: 'Build full-stack apps with React and Node.js.',
    },
  ];

  openIndex = signal<number | null>(null);

  toggleItem(index: number): void {
    this.openIndex.update((value) => (value === index ? null : index));
  }
}
