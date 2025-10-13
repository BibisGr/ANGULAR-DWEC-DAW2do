import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonesInterface } from '../common/pokemones';
import { RickyMortyInterface } from '../common/ricky-morty';
import { PersonajeInterface } from '../common/personajeInterface';

// import { DragonBall } from '../common/dragon-ball';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // getPokemones3() {
  //   return this.http.get('https://pokeapi.co/api/v2/pokemon');
  // }

  getAllPokemones():Observable<PokemonesInterface> {
    return this.http.get<PokemonesInterface>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  }

  // getDragonBallPersonajes():Observable<DragonBall>{
  //   return this.http.get<DragonBall>('https://dragonball-api.com/api/characters');
  // }

  private URL = 'https://rickandmortyapi.com/api/character/'
  getRickAndMortyAllCharacters()
  :Observable<RickyMortyInterface>{
    return this.http.get<RickyMortyInterface>
    (this.URL)
  }

  getRickAndMortyCharByID(id: string):
  Observable<PersonajeInterface>{
    return this.http.get<PersonajeInterface>
    (this.URL + id)
  }


}
