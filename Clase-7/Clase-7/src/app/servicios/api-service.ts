import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRandomInterface } from '../common/user-random';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly URL = "https://randomuser.me/api/?seed=Progresa&results=20"

  private URLLocal= "data/users.json"
  // private http: HttpClient = inject(HttpClient)

  constructor(private http : HttpClient){}

  get20Users():Observable<UserRandomInterface>{
    return this.http.get<UserRandomInterface>(this.URLLocal)
  }

}
