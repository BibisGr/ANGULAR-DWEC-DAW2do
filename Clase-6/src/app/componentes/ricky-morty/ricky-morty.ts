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
export class RickyMorty implements OnInit {

  AllDataCharacters!: RickyMortyInterface

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.loadAllCharacters();
  }
  loadAllCharacters() {
    this.apiservice.getRickAndMortyAllCharacters()
      .subscribe(
        {
          next: (data) => {
            this.AllDataCharacters = data
          },
          error: (error) => {
            console.error('Error cargando los datos de personajes', error)
          },
          complete: () => {
            console.log('Carga de datos correcto')
          }
        }
      )
  }

  CambiaPagina(page: string) {
    switch (page) {
      case 'first':
        this.loadPage(
          'https://rickandmortyapi.com/api/character?page=1'
        )
        break;
      case 'prev':
        this.loadPage(
          this.AllDataCharacters.info.prev
        )
        break;
      case 'next':
        this.loadPage(
          this.AllDataCharacters.info.next
        )
        break;
      case 'last':
        this.loadPage(
          'https://rickandmortyapi.com/api/character?page='
          + this.AllDataCharacters.info.pages
        )
        break;
    }
  }

  public loadPage(page: string) {
    this.apiservice.getRickAndMortyPages(page).subscribe(
      {
        next: (data)=>{
          this.AllDataCharacters = data;
        },
        error: (error)=>{
          console.log('Error en la carga de paginas', error)
        },
        complete: ()=>{
          console.log('carga de datos completa')
        }
      }
    )

  }
  // public EncuentraNumero(pagina: string){
  //   for(let i=0; i<pagina.length; i++){
  //     if(pagina[i] === '='){
  //       return pagina.slice(i+0);
  //     }
  //     return 'no puedo leer el numerp'
  //   }
  // }

}
