import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Result, UserRandomInterface } from '../common/user-random';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private readonly URL = "https://randomuser.me/api/?seed=Progresa&results=20"
  private readonly URLMod = "https://randomuser.me/api/?seed=Progresa&results="
  private URLLocal = "data/users.json"
  private apiUrl = 'https://randomuser.me/api/';
  public USERS_COUNT = 20;

  // private http: HttpClient = inject(HttpClient)

  constructor(private http: HttpClient) { }


  getUsers(userCount: number): Observable<UserRandomInterface> {
    return this.http.get<UserRandomInterface>(this.URLMod + userCount)
  }

    //servicio de paginacion
  getPage(page: number, count: number): Observable<UserRandomInterface> {
    return this.http.get<UserRandomInterface>(this.apiUrl + '?page=' + page + '&results=' + count + '&seed=Progresa');
  }

  findUserByUUID(uuid: string): Observable<Result> {
    return this.getUsers(this.USERS_COUNT).pipe(
      map((userRandom: UserRandomInterface) => {
        // Si estás seguro de que el usuario siempre existirá (por ejemplo, porque el UUID viene de la lista que acabas de cargar), puedes usar el operador non-null assertion (!):
        return userRandom.results.find(user => user.login.uuid === uuid)!
      })
    );
  }




}
