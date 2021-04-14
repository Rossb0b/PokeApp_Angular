import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/service/pokemon/pokemon.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})

export class HomeComponent implements OnInit {
  pokemon: any;
  pokemons: any;
  isLoading = false;
  currentPage = 0;
  pokemonsToDisplay = [];
  pokemonsPerPage = 20;

  constructor(
    private pokeService: PokemonService
  ) {  }

  ngOnInit() {
    this.initialize();
  }

  async initialize(): Promise<void> {
    await this.getAll();
  }

  async get(id: string): Promise<any> {
    try {
      this.pokemon = await this.pokeService.find(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAll(): Promise<any> {
    try {
      this.pokemons = await this.pokeService.getAll();

      for (let i = 0; i <= this.pokemonsPerPage - 1; i++) {
        if (this.pokemons[i]) {
          this.pokemonsToDisplay.push(this.pokemons[i]);
        }
      }

      console.log(this.pokemonsToDisplay);
    } catch (error) {
      throw new Error(error);
    }
  }
  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.pokemonsPerPage = pageData.pageSize;
    this.pokemonsToDisplay = [];
    const newIndex = this.pokemonsPerPage * pageData.pageIndex;
    for (let i = newIndex; i <= newIndex + this.pokemonsPerPage - 1; i++) {
      if (this.pokemons[i]) {
        this.pokemonsToDisplay.push(this.pokemons[i]);
      }
    }
    console.log(this.pokemonsToDisplay);
    this.isLoading = false;
  }
}
