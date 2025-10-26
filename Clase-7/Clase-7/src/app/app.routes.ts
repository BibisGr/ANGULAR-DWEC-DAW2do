import { Routes } from '@angular/router';
import { UserRandomComponent } from './componentes/user-random-component/user-random-component';
import { UserDetailComponente } from './componentes/userdetail-componentes/userdetail-componentes';

export const routes: Routes = [
  { path: 'user-random', component: UserRandomComponent },
  { path: 'userd/:uuid', component: UserDetailComponente },
  { path: '', redirectTo: '/user-random', pathMatch: 'full' }
];
