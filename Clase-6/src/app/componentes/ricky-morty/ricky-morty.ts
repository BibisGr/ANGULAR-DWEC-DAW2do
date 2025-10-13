import { Component, OnInit } from '@angular/core';
import { RickyMortyInterface } from '../../common/ricky-morty';
import { ApiService } from '../../Servicios/api-service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-ricky-morty',
  imports: [RouterLink],
  templateUrl: './ricky-morty.html',
  styleUrl: './ricky-morty.css'
})
export class RickyMorty implements OnInit{

  AllDataCharacters!: RickyMortyInterface

  constructor(private apiservice: ApiService){}

  ngOnInit(): void {
    this.loadAllCharacters();
  }
  loadAllCharacters() {
    this.apiservice.getRickAndMortyAllCharacters()
    .subscribe(
      {
        next: (data)=>{
          this.AllDataCharacters = data
        },
        error: (error)=>{
          console.error('Error cargando los datos de personajes', error)
        },
        complete: ()=>{
          console.log('Carga de datos correcto')
        }
      }
    )
  }

}
