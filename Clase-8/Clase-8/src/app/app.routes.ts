import { Routes } from '@angular/router';
import { ProductList } from './componentes/product-list/product-list';
import { ProductDetails } from './componentes/product-details/product-details';
import { ProductCard } from './componentes/product-card/product-card';

export const routes: Routes = [
  {path: '',redirectTo: '/product-list', pathMatch: 'full'},
  {path: 'product-list', component: ProductList},
  {path: 'product/details/:id', component: ProductDetails},
  {path: 'product-card', component: ProductCard},

];
