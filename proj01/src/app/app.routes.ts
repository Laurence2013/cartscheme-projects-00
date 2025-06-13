import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'tabs',
		pathMatch: 'full'
	},
	{
		path: 'tabs',
		loadComponent: () => import ('./pages/tabs/tabs.page').then(m => m.TabsPage),
		children: [
			{
				path: '',
				redirectTo: '/tabs/home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				loadComponent: () => import ('./pages/tabs/home/home.page').then(m => m.HomePage)
			},
			{
				path: 'search',
				loadComponent: () => import ('./pages/tabs/search/search.page').then(m => m.SearchPage)
			},
			{
				path: 'page-test',
				loadComponent: () => import('./pages/tabs/page-test/page-test.page').then( m => m.PageTestPage)
			}
		]
	},
];
