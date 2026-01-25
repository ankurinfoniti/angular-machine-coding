import { Component, computed, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  imports: [],
  templateUrl: './stop-watch.html',
  styleUrl: './stop-watch.css',
})
export class StopWatch implements OnDestroy {
  totalSeconds = signal(0);
  seconds = computed(() => this.totalSeconds() % 60);
  minutes = computed(() => Math.floor(this.totalSeconds() / 60) % 60);
  hours = computed(() => Math.floor(this.totalSeconds() / 3600));
  displayTime = computed(() => {
    const h = this.hours().toString().padStart(2, '0');
    const m = this.minutes().toString().padStart(2, '0');
    const s = this.seconds().toString().padStart(2, '0');
    return `${h} : ${m} : ${s}`;
  });
  isRunning = signal(false);
  interval: number | undefined;

  startTimer() {
    if (this.isRunning()) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.totalSeconds.update((value) => value + 1);
      }, 1000);
    }
    this.isRunning.update((isRunning) => !isRunning);
  }

  resetTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.isRunning.set(false);
    }

    this.totalSeconds.set(0);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
