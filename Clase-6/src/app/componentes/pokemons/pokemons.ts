import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Servicios/api-service';
import { PokemonesInterface } from '../../common/pokemones';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css'
})
export class Pokemons implements OnInit {

  allPokemones!: PokemonesInterface //Objeto que va a recibir el paquete de datos de los pokemones

  constructor(private apiService: ApiService) { }  //Inyección del servicio ApiService para poder usar sus métodos

  //Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.loadPokemones(); //Llamada a la función que carga los pokemones
  }
  loadPokemones() {
    //Llamada al método getAllPokemones del servicio ApiService
    this.apiService.getAllPokemones().subscribe(
      {
        next:(data)=>{
          this.allPokemones = data; //Asignación de los datos recibidos al objeto allPokemones
        },
        error:(error)=>{
          console.error('Error fetching pokemones', error); //Manejo de errores en caso de fallo en la petición
        },
        complete:()=>{
          console.log('Completed fetching pokemones', this.allPokemones); //Mensaje de confirmación al completar la petición
        }
      }
    )
  }

}

