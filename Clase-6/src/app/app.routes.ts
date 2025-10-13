import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Pokemons } from './componentes/pokemons/pokemons';
import { DragonBall } from './componentes/dragon-ball/dragon-ball';
import { RickyMorty } from './componentes/ricky-morty/ricky-morty';
import { PageNotFoundComponent } from './componentes/page-not-found-component/page-not-found-component';
import { PersonajeDetail } from './componentes/personaje-detail/personaje-detail';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'pokemones', component: Pokemons},
  {path: 'dragonBall', component: DragonBall},
  {path: 'RickyMorty', component: RickyMorty},
  {path: 'RickyMorty/personaje/:id', component: PersonajeDetail},
  // {path: 'randomUser', component: RandomUser},
  { path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
];
