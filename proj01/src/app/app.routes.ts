import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tabs4',
    loadComponent: () => import('./tabs4/tabs4.page').then( m => m.Tabs4Page)
  },
];
