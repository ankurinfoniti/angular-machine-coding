import { Routes } from '@angular/router';

import { TabsForm } from './tabs-form/containers/tabs-form/tabs-form';
import { DemoLink } from './demo-link/demo-link';
import { FormArray } from './form-array/form-array/form-array';
import { ChipsInput } from './chips-input/chips-input';
import { Accordion } from './accordion/containers/accordion/accordion';
import { ProgressBarContainer } from './progress-bar/container/progress-bar-container/progress-bar-container';
import { TogglePassword } from './toggle-password/toggle-password';
import { OtpInput } from './otp-input/otp-input';
import { Todos } from './todos/containers/todos/todos';
import { ListSorterContainer } from './list-sorter/containers/list-sorter-container/list-sorter-container';
import { CharacterCount } from './character-count/character-count';

export const routes: Routes = [
  {
    path: '',
    component: DemoLink,
  },
  {
    path: 'tabs-form',
    component: TabsForm,
  },
  {
    path: 'form-array',
    component: FormArray,
  },
  {
    path: 'chips-input',
    component: ChipsInput,
  },
  {
    path: 'accordion',
    component: Accordion,
  },
  {
    path: 'progress-bar',
    component: ProgressBarContainer,
  },
  {
    path: 'toggle-password',
    component: TogglePassword,
  },
  {
    path: 'otp-input',
    component: OtpInput,
  },
  {
    path: 'todo-list',
    component: Todos,
  },
  {
    path: 'list-sorter',
    component: ListSorterContainer,
  },
  {
    path: 'character-count',
    component: CharacterCount,
  },
];
