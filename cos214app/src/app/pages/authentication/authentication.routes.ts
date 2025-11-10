import { Routes } from '@angular/router';

import { LoginPage } from './login/login.page';

export const routes: Routes = [
  {
    path: '',

    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'login',

    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },

  {
    path: 'sign-up',

    loadComponent: () =>
      import('./sign-up/sign-up.page').then((m) => m.SignupPage),
  },
];
