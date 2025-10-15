import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Servicios/api-service';
import { DisneyInterface } from '../../common/disneyInterface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-disney-component',
  imports: [RouterLink],
  templateUrl: './disney-component.html',
  styleUrl: './disney-component.css'
})
export class DisneyComponent implements OnInit {
  AllDisneryCharacters!: DisneyInterface;

  constructor(private apiservice: ApiService){}

  ngOnInit(): void {
    this.loadAllDisneyCharacters();
  }

  loadAllDisneyCharacters() {
    this.apiservice.getAllDisneyCharacters().subscribe(
      {
        next:(data)=>{
          this.AllDisneryCharacters =  data;
        },
        error: (error)=>{
          console.log('no se han podido cargar los personjes', error);
        },
        complete:()=>{
          console.log('carga complatada con exito')
        }
      }
    )
  }

}
