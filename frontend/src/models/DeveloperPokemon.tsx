import { Pokemon } from './Pokemon';

export class DeveloperPokemon {
    private _pokemon: Pokemon;
  

    constructor(pokemon: Pokemon) {
        this._pokemon = pokemon;
    }

    getPokemon(): Pokemon {
        return this._pokemon;
    }
}
