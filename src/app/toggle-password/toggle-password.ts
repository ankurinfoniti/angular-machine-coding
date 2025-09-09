import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-password',
  imports: [],
  templateUrl: './toggle-password.html',
  styleUrl: './toggle-password.css',
})
export class TogglePassword {
  fieldType = 'password';
  showPassword = false;

  toggleVisibility() {
    this.showPassword = !this.showPassword;
    this.fieldType = this.showPassword ? 'text' : 'password';
  }
}
