import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  rutas: {nombreRuta:string,
    ruta:string}[]=
  [
    {
      nombreRuta: 'Pokemon API',
      ruta: '/pokemones',


    },
    {
      nombreRuta: 'Dragon Ball API',
      ruta: '/dragonBall'
    },
    {
      nombreRuta: 'Rick y Morty API',
      ruta: '/RickyMorty'
    },
    {
      nombreRuta: 'Disney API',
      ruta: '/disney'
    }
  ]

}
