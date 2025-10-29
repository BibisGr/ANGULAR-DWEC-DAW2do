import { Component, computed, OnInit, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-basicas',
  imports: [],
  templateUrl: './basicas.html',
  styleUrl: './basicas.css',
})
export class Basicas implements OnInit {

  // SIGNALS
  nombre: WritableSignal<string> =
    signal<string>('John Doe');
  valor: WritableSignal<number> =
    signal<number>(0)

  // READONLY SIGNALS
  nombreReadOnly: Signal<string> =
    this.nombre.asReadonly();

  // COMPUTED SINALS signals computacional u operacionales
  valorDoble: Signal<number> =
    // computed(() => this.valor() * 2)
    computed(() => this.valor() * this.valorPlus())


  valorPlus: Signal<number> =
    computed(() => this.valor() + 2)

  ngOnInit(): void {
    this.nombre.set('Susan Doe');

  }
  updateSignal() {
    this.nombre.update((valorActual) =>
      valorActual + ' actualizado');
    this.valor.update((value) => value + 1)
    // this.nombreReadOnly. no puede setearse ni actualizarse
    // depende de mombre, si nombre cambia, nombreReadOnly cambia
  }
  updateSignal2() {
    this.valor.update((value) => value + 2)
  }


}
