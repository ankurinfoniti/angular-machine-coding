import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AccordionItem } from '../../model/accordion';

@Component({
  selector: 'app-accordion-single',
  imports: [],
  templateUrl: './accordion-single.html',
  styleUrl: './accordion-single.css',
})
export class AccordionSingle {
  @Input() item!: AccordionItem;
  @Input() isExpanded = false;
  @Output() toggled = new EventEmitter<void>();

  toggleExpand() {
    this.toggled.emit();
  }
}
