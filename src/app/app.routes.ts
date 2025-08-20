import { Routes } from '@angular/router';

import { TabsForm } from './tabs-form/containers/tabs-form/tabs-form';
import { DemoLink } from './demo-link/demo-link';

export const routes: Routes = [
  {
    path: '',
    component: DemoLink,
  },
  {
    path: 'tabs-form',
    component: TabsForm,
  },
];
