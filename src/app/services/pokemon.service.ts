import { Injectable } from '@angular/core';
import { POKEMON_URL, POKEMON_URL_V2, LIMIT } from '../def/constants';
import { IPokemon, IPokemonDetails } from '../def/pokemon';
import { IData } from '../def/data';
import { Http } from '@angular/http';
import { Observable, throwError, of as ofObs } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: IPokemon[] = []
  currentData: IData<IPokemon>
  currentPokemonDetails: IPokemon
  constructor(private _http: Http) {}

  fetchPokemons():Observable<boolean> {
    this.currentData = null
    this.pokemons = []
    return this
      ._http
      .get(`${POKEMON_URL}?limit=${LIMIT}&offset=${this.pokemons.length}`)
      .pipe(
        switchMap(response => {
          if (response.ok || response.status < 400) {
            console.log('ok')
            return ofObs(response.json())
          }
        }),
        map(value => {
          this.currentData = value
          this.pokemons = this.currentData.objects
          return true
        }),
      )
  }
  
  fetchDetails(id: number):Observable<boolean> {
    this.currentPokemonDetails = null
    return this
      ._http
      .get(`${POKEMON_URL_V2}${id}`)
      .pipe(
        map(response => response.json()),
        map(data => {
          this.currentPokemonDetails = data;
          return true
        })
      )
  }
}
