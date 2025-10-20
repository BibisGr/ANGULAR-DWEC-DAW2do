import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api-service';
import { UserRandomInterface } from '../../common/user-random';
import { NgStyle, DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-random-component',
  imports: [NgStyle, DatePipe],
  templateUrl: './user-random-component.html',
  styleUrl: './user-random-component.css'
})
export class UserRandomComponent implements OnInit{
  RandomUser!: UserRandomInterface;

  constructor(private apiservice:ApiService){}

  ngOnInit(): void {
    this.loadUserRandom();
  }
  loadUserRandom() {
    this.apiservice.get20Users().subscribe(
      {
        next:(data)=>{
          this.RandomUser = data;
        },
        error:(err)=>{
          console.log('No se cargaron los datos', err)
        },
        complete:()=>{
          console.log('Carga de datos Correcta')
        }
      }
    )
  }



}
