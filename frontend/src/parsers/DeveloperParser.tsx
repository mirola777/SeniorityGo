import { Developer } from "../models/Developer";
import JsonToUser from "./UserParser";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


function JsonToDeveloper(json: any): Developer {
    const developer = new Developer(
        JsonToUser(json),
        json.first_name,
        json.second_name,
        json.last_name,
        json.birthday,
        json.avatar ? BACKEND_URL + json.avatar : null,
        json.phone_number,
        json.is_activated,
        [],
        []
    );

    return developer;
}

export default JsonToDeveloper;