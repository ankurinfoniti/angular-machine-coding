import { Component, computed, inject, signal } from '@angular/core';
import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Profile } from '../../components/profile/profile';
import { Interest } from '../../components/interest/interest';
import { Settings } from '../../components/settings/settings';

@Component({
  selector: 'app-tabs-form',
  imports: [ReactiveFormsModule, NgComponentOutlet, TitleCasePipe],
  templateUrl: './tabs-form.html',
  styleUrl: './tabs-form.css',
})
export class TabsForm {
  fb = inject(FormBuilder);

  tabsConfig = [
    {
      name: 'profile',
      component: Profile,
    },
    {
      name: 'interest',
      component: Interest,
    },
    {
      name: 'settings',
      component: Settings,
    },
  ];

  activeTabIndex = signal<number>(0);
  activeTabComponent = computed(() => this.tabsConfig[this.activeTabIndex()].component);
  activeTabName = computed(() => this.tabsConfig[this.activeTabIndex()].name);

  form = this.fb.group({
    profile: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: [18, [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
    }),
    interest: this.fb.group({
      interest: ['', [Validators.required]],
    }),
    settings: this.fb.group({
      theme: ['', [Validators.required]],
    }),
  });

  onTabClick(index: number) {
    if (this.form.get(this.activeTabName())?.invalid) {
      this.form.get(this.activeTabName())?.markAllAsTouched();
      return;
    }
    this.activeTabIndex.set(index);
  }

  isActive(index: number) {
    return this.activeTabIndex() === index;
  }

  onPrevClick() {
    if (this.form.get(this.activeTabName())?.invalid) {
      this.form.get(this.activeTabName())?.markAllAsTouched();
      return;
    }
    this.activeTabIndex.update((index) => index - 1);
  }

  onNextClick() {
    if (this.form.get(this.activeTabName())?.invalid) {
      this.form.get(this.activeTabName())?.markAllAsTouched();
      return;
    }
    this.activeTabIndex.update((index) => index + 1);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
