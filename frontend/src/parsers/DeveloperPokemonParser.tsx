import { DeveloperPokemon } from "../models/DeveloperPokemon";
import JsonToPokemon from "./PokemonParser";


function JsonToDeveloperPokemon(json: any): DeveloperPokemon {
    const developerpokemon = new DeveloperPokemon(
        JsonToPokemon(json.pokemon),
    );

    return developerpokemon;
}

export default JsonToDeveloperPokemon;