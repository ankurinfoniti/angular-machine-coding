import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'app-even-or-odd',
  imports: [AsyncPipe],
  templateUrl: './even-or-odd.html',
  styleUrl: './even-or-odd.css',
})
export class EvenOrOdd {
  result$: Observable<string> = of('');

  checkNumber(value: string) {
    value = value.trim();
    const num = parseInt(value);

    let resultText = '';

    if (isNaN(num)) {
      resultText = 'Please enter a valid number.';
    } else if (num % 2 === 0) {
      resultText = `The number ${num} is even.`;
    } else {
      resultText = `The number ${num} is odd.`;
    }

    this.result$ = of(resultText).pipe(delay(1000), startWith('Checking...'));
  }
}
