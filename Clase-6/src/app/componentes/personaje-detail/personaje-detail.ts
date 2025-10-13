import { Component, OnInit } from '@angular/core';
import { PersonajeInterface } from '../../common/personajeInterface';
import { ApiService } from '../../Servicios/api-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personaje-detail',
  imports: [],
  templateUrl: './personaje-detail.html',
  styleUrl: './personaje-detail.css'
})
export class PersonajeDetail implements OnInit {
  ONECharacter!: PersonajeInterface;
  constructor(
    private apiservice: ApiService,
    private activatedRouted: ActivatedRoute,
    private route: Router
  ){}
  ngOnInit(): void {
    this.LoadOneCharacter();
  }
  LoadOneCharacter() {
    const id = this.activatedRouted.snapshot
    .params['id'];
    this.apiservice.getRickAndMortyCharByID(id).
    subscribe(
      {
        next: (data)=>{
          this.ONECharacter = data;
        },
        error: (error)=>{
          console.log(error);
        },
        complete:()=>{
          console.log('Personaje cargado');
        }
      }
    )
  }

  CambiaChar(id:number){
    if(id>0 && id<826){
      this.route.navigate(['/personaje', id])
      .then(()=> this.LoadOneCharacter)
    }
  }

}
