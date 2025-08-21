import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.html',
  styleUrl: './form-array.css',
})
export class FormArray {
  fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    address: this.fb.group({
      street: ['', [Validators.required]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
    }),
    tickets: this.fb.array([this.createTicket()]),
  });

  get address() {
    return this.form.controls.address;
  }

  get tickets() {
    return this.form.controls.tickets;
  }

  createTicket() {
    return this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]{1,2}$')]],
    });
  }

  addTicket() {
    this.tickets.push(this.createTicket());
  }

  removeTicket(index: number) {
    this.tickets.removeAt(index);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
