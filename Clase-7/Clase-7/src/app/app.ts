import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRandomComponent } from "./componentes/user-random-component/user-random-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Clase-7');
}
