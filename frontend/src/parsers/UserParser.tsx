import { Admin } from "../models/Admin";
import { Developer } from "../models/Developer";
import { User } from "../models/User";
import JsonToDeveloperProfile from "./DeveloperProfileParser";


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
            json.profiles ? json.profiles.map((profileseniority: any) => {  return JsonToDeveloperProfile(profileseniority)}) : [],
            []
        );
    
        return developer;

    } else if (json.role === 'admin') {
        const admin = new Admin(
            user,
        );

        return admin;
    }

    return null;
}

export default JsonToUser;