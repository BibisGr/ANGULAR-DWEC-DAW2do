import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api-service';
import { Result, UserRandomInterface } from '../../common/user-random';
import { NgStyle, DatePipe } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-random-component',
  imports: [NgStyle, DatePipe, NgbPaginationModule, RouterLink],
  templateUrl: './user-random-component.html',
  styleUrl: './user-random-component.css'
})
export class UserRandomComponent implements OnInit {
  randomUser!: UserRandomInterface;

  //valores estrucrtura de paginacion
  page = 1;          // Página actual
  collectionSize = 70; // Tamaño total (lo defines tú o lo que quieras mostrar)
  pageSize = 20;     // Usuarios por página


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadUserRandom();
  }
  loadUserRandom() {
    this.apiService.getUsers(this.apiService.USERS_COUNT).subscribe(
      {
        next: (data) => {
          this.randomUser = data;
        },
        error: (err) => {
          console.log('No se cargaron los datos', err)
        },
        complete: () => {
          console.log('Carga de datos Correcta')
        }
      }
    )
  }

  loadNewPagesUsers() {
    this.apiService.getPage(this.page, this.pageSize).subscribe(
      {
        next: (data) => {
          this.randomUser = data
        },
        error: (err) => {
          console.log('no se cargagaron los datos', err)
        },
        complete: () => {
          console.log('carga de datos completada')
        }
      }
    );
  }

  onPageChange(page: number) {
    this.page = page;
    this.loadNewPagesUsers();
  }

  findUserByUUID(uuid: string): Result | undefined {
    return this.randomUser?.results.find(user => user.login.uuid === uuid);
  }

  goToUserDetail(uuid: string) {
    // Podrías pasar el uuid por parámetro de ruta
    this.router.navigate(['/userd', uuid]);
    console.log("sss")
  }




}
