import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'contact', component: ContactComponent },
	{
		path: 'apropos',
		loadComponent: () => import('./pages/apropos/apropos.component').then(m => m.AproposComponent)
	},
	{
		path: 'faq',
		loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent)
	},
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];



