import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest',
  imports: [ReactiveFormsModule],
  templateUrl: './interest.html',
  styleUrl: './interest.css',
})
export class Interest {
  @Input() formGroup!: FormGroup;

  get interest() {
    return this.formGroup.get('interest');
  }
}
