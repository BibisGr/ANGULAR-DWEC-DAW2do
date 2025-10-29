import { Routes } from '@angular/router';
import { ProductList } from './componentes/product-list/product-list';
import { ProductDetails } from './componentes/product-details/product-details';
import { ProductCard } from './componentes/product-card/product-card';
import { Basicas } from './componentes/signals/basicas/basicas';
import { Children } from './componentes/signals/children/children';

export const routes: Routes = [
  { path: 'product-list', component: ProductList },
  { path: 'product/details/:id', component: ProductDetails },
  { path: 'product-card', component: ProductCard },
  { path: 'signals/basicas', component: Basicas },
  { path: 'signals/children', component: Children },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
];
