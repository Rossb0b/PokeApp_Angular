import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/service/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  pokemon: any;
  pokemons: any;

  constructor(
    private pokeService: PokemonService
  ) {  }

  ngOnInit() {
    this.initialize();
  }

  async initialize(): Promise<void> {
    await this.get("143");
    await this.getAll();
  }

  async get(id: string): Promise<any> {
    try {
      this.pokemon = this.pokeService.find(id);

      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll(): Promise<any> {
    try {
      this.pokemons = this.pokeService.getAll();

      console.log(this.pokemons);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
