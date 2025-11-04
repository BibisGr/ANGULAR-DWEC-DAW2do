import { Home } from './../../../Clase-9/src/app/componentes/home/home';
import { Routes } from '@angular/router';
import { Valorant } from './componentes/valorant/valorant';
import { PokemonTcg } from './componentes/pokemon-tcg/pokemon-tcg';
import { PageNotFoundPage } from './componentes/page-not-found-page/page-not-found-page';
import { MonsterHunter } from './componentes/monster-hunter/monster-hunter';
import { FinalSpace } from './componentes/final-space/final-space';

export const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: Home},
  {path:'valorant', component: Valorant},
  {path: 'pokemons-card', component: PokemonTcg},
  {path: 'monster-hunter', component: MonsterHunter},
  {path: 'final-space', component: FinalSpace},
  {path: '*', component: PageNotFoundPage}
];
