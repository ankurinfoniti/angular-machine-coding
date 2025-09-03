import { Component } from '@angular/core';

import { ProgressBar } from '../../component/progress-bar/progress-bar';

@Component({
  selector: 'app-progress-bar-container',
  imports: [ProgressBar],
  templateUrl: './progress-bar-container.html',
  styleUrl: './progress-bar-container.css',
})
export class ProgressBarContainer {}
