import axios from "axios";
import { Pokemon } from "../models/Pokemon";
import JsonToPokemon from "../parsers/PokemonParser";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export async function getAllPokemons(): Promise<Pokemon[]> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/pokemon/');

        const pokemons: Pokemon[] = response.data.map((json: any) => {
            return JsonToPokemon(json);
        });


        return pokemons;
    } catch (error: any) {
        throw error.response.data;
    }
}