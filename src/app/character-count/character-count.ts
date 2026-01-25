import { Component } from '@angular/core';

@Component({
  selector: 'app-character-count',
  imports: [],
  templateUrl: './character-count.html',
  styleUrl: './character-count.css',
})
export class CharacterCount {
  maxCharacter = 50;
  characterCount = 0;
  showWarning = false;
  showError = false;

  updateMaxCharacter(value: string) {
    this.maxCharacter = Number(value) || 0;
    console.log(this.characterCount);
    this.updateCharacterCount(this.characterCount);
  }

  updateCharacterCount(value: string | number) {
    this.characterCount = typeof value === 'string' ? value.length : value;

    // if user reaches 90% of the limit then show warning
    this.showWarning = this.characterCount >= this.maxCharacter * 0.9;

    // if user exceeds the character limit then show error
    this.showError = this.characterCount > this.maxCharacter;
  }
}
