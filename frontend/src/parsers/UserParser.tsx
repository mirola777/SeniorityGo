import { Admin } from "../models/Admin";
import { Developer } from "../models/Developer";
import { User } from "../models/User";
import JsonToDeveloperPokemon from "./DeveloperPokemonParser";
import JsonToDeveloperProfile from "./DeveloperProfileParser";
import JsonToDeveloperRequirement from "./DeveloperRequirementParser";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


function JsonToUser(json: any): Admin | Developer | null {
    const user = new User(
        json.user.id,
        json.user.username,
        json.user.email,
        json.organization
    );


    if (json.role === 'developer') {
        const developer = new Developer(
            user,
            json.first_name,
            json.second_name,
            json.last_name,
            json.birthday,
            json.avatar ? BACKEND_URL + json.avatar : null,
            json.phone_number,
            json.is_activated,
            json.score,
            json.profiles ? json.profiles.map((developerprofile: any) => {  return JsonToDeveloperProfile(developerprofile)}) : [],
            json.requirements ? json.requirements.map((developerrequirement: any) => {  return JsonToDeveloperRequirement(developerrequirement)}) : [],
            json.pokemons ? json.pokemons.map((developerpokemon: any) => {  return JsonToDeveloperPokemon(developerpokemon)}) : [],
        );
    
        return developer;

    } else if (json.role === 'admin') {
        const admin = new Admin(
            user,
            json.avatar ? BACKEND_URL + json.avatar : null,
        );

        return admin;
    }

    return null;
}

export default JsonToUser;