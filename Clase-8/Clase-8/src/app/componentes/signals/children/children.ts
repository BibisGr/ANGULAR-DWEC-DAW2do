import { Component, effect, viewChild, viewChildren } from '@angular/core';
import { EjemploChildren } from "../ejemplo-children/ejemplo-children";

@Component({
  selector: 'app-children',
  imports: [EjemploChildren],
  templateUrl: './children.html',
  styleUrl: './children.css',
})
export class Children {
  valorInicial: number = 10;
  childComponent = viewChild.required(EjemploChildren);
  childrenComponent = viewChildren(EjemploChildren);
  constructor(){
    effect(()=>{
      alert(this.childComponent().value());
    })
  }

}
