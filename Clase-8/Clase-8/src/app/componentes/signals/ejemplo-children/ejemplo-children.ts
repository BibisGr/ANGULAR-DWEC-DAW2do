import { Component, model } from '@angular/core';

@Component({
  selector: 'app-ejemplo-children',
  imports: [],
  templateUrl: './ejemplo-children.html',
  styleUrl: './ejemplo-children.css',
})
export class EjemploChildren {
  value = model(0);
  increment() {
    this.value.update((valor) => valor + 1);
  }
}
