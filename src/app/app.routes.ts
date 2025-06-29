import { Routes } from '@angular/router';

export const routes: Routes = [
	{ 
		path: '', 
		loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
		title: 'Accueil - NaturaCorp'
	},
	{ 
		path: 'products', 
		loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
		title: 'Produits - NaturaCorp'
	},
	{ 
		path: 'contact', 
		loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
		title: 'Contact - NaturaCorp'
	},
	{
		path: 'blog',
		loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent),
		title: 'Blog - NaturaCorp'
	},
	{
		path: 'apropos',
		loadComponent: () => import('./pages/apropos/apropos.component').then(m => m.AproposComponent),
		title: 'À propos - NaturaCorp'
	},
	{
		path: 'faq',
		loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent),
		title: 'FAQ - NaturaCorp'
	},
	{
		path: 'confidentialite',
		loadComponent: () => import('./pages/confidentialite/confidentialite.component').then(m => m.ConfidentialiteComponent),
		title: 'Confidentialité - NaturaCorp'
	},
	{
		path: 'mentions-legales',
		loadComponent: () => import('./pages/mentions-legales/mentions-legales.component').then(m => m.MentionsLegalesComponent),
		title: 'Mentions légales - NaturaCorp'
	},
	{
		path: 'conditions-generales',
		loadComponent: () => import('./pages/conditions-generales/conditions-generales.component').then(m => m.ConditionsGeneralesComponent),
		title: 'Conditions générales - NaturaCorp'
	},
	{
		path: 'qui-sommes-nous',
		loadComponent: () => import('./pages/qui-sommes-nous/qui-sommes-nous.component').then(m => m.QuiSommesNousComponent),
		title: 'Qui sommes-nous - NaturaCorp'
	},
	{
		path: 'notre-histoire',
		loadComponent: () => import('./pages/notre-histoire/notre-histoire.component').then(m => m.NotreHistoireComponent),
		title: 'Notre histoire - NaturaCorp'
	},
	{
		path: 'nos-valeurs',
		loadComponent: () => import('./pages/nos-valeurs/nos-valeurs.component').then(m => m.NosValeursComponent),
		title: 'Nos valeurs - NaturaCorp'
	},
	{ 
		path: '**', 
		redirectTo: '', 
		pathMatch: 'full' 
	}
];



