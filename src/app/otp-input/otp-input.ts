import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-otp-input',
  imports: [],
  templateUrl: './otp-input.html',
  styleUrl: './otp-input.css',
})
export class OtpInput implements AfterViewInit {
  @ViewChildren('otpInput') otpInput!: QueryList<ElementRef>;

  otpDigitsCount = 6;
  otpDigits = Array.from({ length: this.otpDigitsCount }, () => '');

  ngAfterViewInit() {
    this.otpInput.first.nativeElement.focus();
  }

  onKeydown(event: KeyboardEvent, index: number) {
    const key = event.key;
    const value = (event.target as HTMLInputElement).value.trim();

    // Handle backspace navigation FIRST
    if (key === 'Backspace' && index > 0 && value === '') {
      this.otpInput.toArray()[index - 1].nativeElement.focus();
      return;
    }

    // Allow: backspace, delete, tab, escape, enter, arrows
    if (
      [
        'Backspace',
        'Delete',
        'Tab',
        'Escape',
        'Enter',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
      ].includes(key)
    ) {
      return;
    }

    // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z
    if (event.ctrlKey && ['a', 'c', 'v', 'x', 'z'].includes(key.toLowerCase())) {
      return;
    }

    // Only allow single digits (0-9)
    if (!/^[0-9]$/.test(key)) {
      event.preventDefault();
    }
  }

  onInput(value: string, index: number) {
    value = value.trim();

    if (isNaN(parseInt(value))) {
      this.otpDigits = this.otpDigits.map((digit, i) => (i === index ? '' : digit));
    } else {
      this.otpDigits = this.otpDigits.map((digit, i) => (i === index ? value.slice(-1) : digit));

      if (index < this.otpDigitsCount - 1) {
        this.otpInput.toArray()[index + 1].nativeElement.focus();
      }
    }
  }
}
