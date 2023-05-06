import { ProfileSeniority } from "../models/ProfileSeniority";
import JsonToPokemon from "./PokemonParser";
import JsonToSeniority from "./SeniorityParser";


function JsonToProfileSeniority(json: any): ProfileSeniority {
    const profileseniority = new ProfileSeniority(
        json.seniority ? JsonToSeniority(json.seniority) : null,
        json.pokemon ? JsonToPokemon(json.pokemon) : null
    );

    return profileseniority;
}

export default JsonToProfileSeniority;