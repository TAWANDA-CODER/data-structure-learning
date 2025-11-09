import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/authentication/authentication.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'quizview/:id',
    loadComponent: () =>
      import('./quiz-view/quiz-view.component').then(
        (m) => m.QuizViewComponent
      ),
  },
];
