import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-chips-input',
  imports: [],
  templateUrl: './chips-input.html',
  styleUrl: './chips-input.css',
})
export class ChipsInput {
  chips: WritableSignal<string[]> = signal([]);

  addChip(value: string) {
    if (value.trim() !== '') {
      this.chips.update((chips) => [...chips, value]);
    }
  }

  removeChip(removedIndex: number) {
    this.chips.update((chips) => {
      return chips.filter((chip, index) => removedIndex !== index);
    });
  }
}
