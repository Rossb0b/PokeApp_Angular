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

  getAll(offset: string = "0", limit: string = "1118") {
    const pokemons = this.pokeApiService.get(`/pokemon/?offset=${offset}&limit=${limit}`);

    this.setPokemon(pokemons);
    return this.getCurrentPokemonValue();
  }

  find(id: string) {
    return this.pokeApiService.get('/pokemon/' + id);
  }
}
