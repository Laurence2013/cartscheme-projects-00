import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./home/home.page').then(m => m.HomePage)
            },
            {
                path: 'account',
                loadChildren: () => import('./account/account.page').then(m => m.AccountPage)
            }
        ]
    },
    {
        path: 'products/:id',
        loadComponent: () => import ('./product-detail/product-detail.page').then(m => m.ProductDetailPage)
    },
]