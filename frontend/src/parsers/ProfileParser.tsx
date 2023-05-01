import { Profile } from "../models/Profile";


function JsonToProfile(json: any): Profile {
    const profile = new Profile(
        json.id,
        json.name,
        json.description,
        [],
        []
    );

    return profile;
}

export default JsonToProfile;