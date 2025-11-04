import { Routes } from '@angular/router';

import { LoginPage } from './login/login.page';

export const routes: Routes = [
  {
    path: '',

    component: LoginPage,

    children: [
      {
        path: 'login',

        loadComponent: () =>
          import('./login/login.page').then((m) => m.LoginPage),
      },

      // {

      //   path: 'tab2',

      //   loadComponent: () =>

      //     import('../tab2/tab2.page').then((m) => m.Tab2Page),

      // },

      // {

      //   path: 'tab3',

      //   loadComponent: () =>

      //     import('../tab3/tab3.page').then((m) => m.Tab3Page),

      // },

      // {

      //   path: '',

      //   redirectTo: '/tabs/tab1',

      //   pathMatch: 'full',

      // },
    ],
  },

  // {

  //   path: '',

  //   redirectTo: '/tabs/tab1',

  //   pathMatch: 'full',

  // },
];
