import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  rutas: { texto: string, ruta: string }[] = [
    { texto: "Inicio", ruta: "/" },
    { texto: "Products", ruta: "/product-list" },
    { texto: "Signals", ruta: "/signals/basicas" },
    { texto: "Children", ruta: "/signals/children" },
  ];
}
