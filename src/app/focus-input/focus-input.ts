import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-focus-input',
  imports: [],
  templateUrl: './focus-input.html',
  styleUrl: './focus-input.css',
})
export class FocusInput {
  @ViewChild('input') input!: ElementRef;

  onClick() {
    this.input.nativeElement.focus();
  }
}
