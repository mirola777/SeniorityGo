import { ProfileSeniority } from "../models/ProfileSeniority";
import JsonToPokemon from "./PokemonParser";
import JsonToRequirement from "./RequirementParser";
import JsonToSeniority from "./SeniorityParser";


function JsonToProfileSeniority(json: any): ProfileSeniority {
    const profileseniority = new ProfileSeniority(
        json.seniority ? JsonToSeniority(json.seniority) : null,
        json.pokemon ? JsonToPokemon(json.pokemon) : null,
        json.requirements ? json.requirements.map((requirement: any) => { return JsonToRequirement(requirement.requirement); }) : []     
    );

    return profileseniority;
}

export default JsonToProfileSeniority;