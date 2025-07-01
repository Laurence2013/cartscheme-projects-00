import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
		redirectTo: 'tabs',
		pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
		children: [
			{
				path: '',
				redirectTo: '/tabs/home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				loadComponent: () => import('./pages/tabs/home/home.page').then(m => m.HomePage)
			},
			{
				path: 'categories',
				loadComponent: () => import('./pages/tabs/categories/categories.page').then( m => m.CategoriesPage)
			},
			{
				path: 'brands',
				loadComponent: () => import('./pages/tabs/brands/brands.page').then( m => m.BrandsPage)
			},
			{
				path: 'discounts',
				loadComponent: () => import('./pages/discounts/discounts.page').then( m => m.DiscountsPage)
			},
			{
				path: 'offers',
				loadComponent: () => import('./pages/offers/offers.page').then( m => m.OffersPage)
			},
			{
				path: 'value-added',
				loadComponent: () => import('./pages/value-added/value-added.page').then( m => m.ValueAddedPage)
			},
		]
  },
];
