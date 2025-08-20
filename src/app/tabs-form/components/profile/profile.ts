import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  @Input() formGroup!: FormGroup;

  get name() {
    return this.formGroup.get('name');
  }

  get age() {
    return this.formGroup.get('age');
  }

  get email() {
    return this.formGroup.get('email');
  }
}
