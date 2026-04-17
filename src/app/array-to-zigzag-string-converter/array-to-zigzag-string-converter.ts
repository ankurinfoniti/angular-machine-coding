import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-array-to-zigzag-string-converter',
  imports: [],
  templateUrl: './array-to-zigzag-string-converter.html',
  styleUrl: './array-to-zigzag-string-converter.css',
})
export class ArrayToZigzagStringConverter {
  resultText = signal('');

  onClick(input: string): void {
    const result = input
      .split(',')
      .map((value, index) => {
        value = value.trim();

        if (index % 2 !== 0) {
          value = value.split('').reverse().join('');
        }

        return value;
      })
      .join('');

    this.resultText.set(result);
  }
}
