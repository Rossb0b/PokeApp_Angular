import { Injectable } from '@angular/core';
import { PokeApiService } from "../poke_api/poke_api.service";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private pokeApiService: PokeApiService) { }

  getAll(): Promise<any> {
    return this.pokeApiService.get('/pokemon/');
  }

  find(id: string): Promise<any> {
    return this.pokeApiService.get('/pokemon/' + id);
  }
}
