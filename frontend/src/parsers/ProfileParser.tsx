import { Profile } from "../models/Profile";
import JsonToProfileSeniority from "./ProfileSeniorityParser";


function JsonToProfile(json: any): Profile {
    const profile = new Profile(
        json.id,
        json.name,
        json.description,
        [],
        json.seniorities ? json.seniorities.map((json: any) => { return JsonToProfileSeniority(json); }) : []
    );

    return profile;
}

export default JsonToProfile;