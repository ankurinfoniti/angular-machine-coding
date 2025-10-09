import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  imports: [ReactiveFormsModule],
  templateUrl: './mortgage-calculator.html',
  styleUrl: './mortgage-calculator.css',
})
export class MortgageCalculator {
  fb = inject(FormBuilder);

  isSubmitted = signal(false);
  result = signal<string | number>('');

  mortageForm = this.fb.group({
    amount: [0, [Validators.required, Validators.min(1)]],
    interest: [0, [Validators.required, Validators.min(1)]],
    years: [0, [Validators.required, Validators.min(1)]],
  });

  onSubmit() {
    this.isSubmitted.set(true);

    if (this.mortageForm.invalid) {
      this.result.set('Invalid input');
      return;
    } else {
      const { amount, interest, years } = this.mortageForm.value;

      if (amount && years && interest) {
        const monthlyInterest = interest / 100 / 12;
        const numberOfPayments = years * 12;
        const monthlyPayment =
          (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));

        this.result.set(monthlyPayment.toFixed(2));
      }
    }
  }
}
