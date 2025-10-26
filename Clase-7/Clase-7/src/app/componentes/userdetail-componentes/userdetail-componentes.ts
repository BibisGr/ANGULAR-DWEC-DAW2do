import { Component } from '@angular/core';
import { Result } from '../../common/user-random';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api-service';

@Component({
  selector: 'app-userdetail-componentes',
  imports: [],
  templateUrl: './userdetail-componentes.html',
  styleUrl: './userdetail-componentes.css'
})
export class UserDetailComponente {
  user!: Result;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    if (uuid) {
      this.loadUser(uuid);
    }
  }

  loadUser(uuid: string) {
    // Vuelves a cargar los usuarios, o podrías optimizarlo con un state global
    this.apiService.findUserByUUID(uuid).subscribe(
      {
        next: (result: Result) => {
          this.user = result
        },
        error: (err) => {
          console.log('Error cargando usuario con uuid: ' + uuid)
        },
        complete: () => {
          console.log('Carga correcta de usuario con uuid: ' + uuid)
        }
      }
    )
  }

}
