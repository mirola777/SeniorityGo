import { Pokemon } from "../models/Pokemon";


function JsonToPokemon(json: any): Pokemon {
    const pokemon = new Pokemon(
        json.id,
        json.name,
        json.image,
        json.small_image
    );

    return pokemon;
}

export default JsonToPokemon;