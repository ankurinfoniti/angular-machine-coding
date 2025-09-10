import { Component } from '@angular/core';

@Component({
  selector: 'app-otp-input',
  imports: [],
  templateUrl: './otp-input.html',
  styleUrl: './otp-input.css',
})
export class OtpInput {
  otpDigitsCount = 6;
  otpDigits = Array.from({ length: this.otpDigitsCount }, () => '');

  ngOnInit() {
    console.log(this.otpDigits);
  }

  onInput(value: string, index: number) {
    this.otpDigits[index] = value;
  }
}
