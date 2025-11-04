import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  rutas: {
    nombreRuta: string,
    ruta: string
  }[] =
    [
      {
        nombreRuta: 'Valorant API',
        ruta: '/valorant',
      },
      {
        nombreRuta: 'Pokemon TCG API',
        ruta: '/pokemons-card'
      },
      {
        nombreRuta: 'Final Space API',
        ruta: '/final-space'
      },
      {
        nombreRuta: 'Monster Hunter API',
        ruta: '/monster-hunter'
      }
    ]

}
