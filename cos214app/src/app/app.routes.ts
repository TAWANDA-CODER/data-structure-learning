import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'kk',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./pages/authentication/authentication.routes').then( m => m.routes)
  },
];
