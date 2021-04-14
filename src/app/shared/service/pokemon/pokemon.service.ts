import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PokeApiService } from "../poke_api/poke_api.service";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  currentPokemonsSubject = new BehaviorSubject(null);

  constructor(private pokeApiService: PokeApiService) { }

  getCurrentPokemon(): Observable<any> {
    return this.currentPokemonsSubject.asObservable();
  }

  getCurrentPokemonValue() {
    return this.currentPokemonsSubject.getValue();
  }

  setPokemon(pokemon): void {
    this.currentPokemonsSubject.next(pokemon);
  }

  async getAll(offset: string = "0", limit: number = 1118) {
    let pokemons;
    let pokemon;

    try {
      pokemons = await this.pokeApiService.get(`/pokemon/?offset=${offset}&limit=${limit.toString()}`);
      for (let index = 1; index <= limit; index++) {
        pokemon = await this.pokeApiService.get(`/pokemon/${index}/`);
        for (const [key, value] of Object.entries(pokemon)) {
          pokemons.results[index - 1][key] = value;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setPokemon(pokemons.results);
    }

    return this.getCurrentPokemonValue();
  }

  async find(id: string) {
    return await this.pokeApiService.get('/pokemon/' + id);
  }
}
