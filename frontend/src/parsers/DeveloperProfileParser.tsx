import { DeveloperProfile } from "../models/DeveloperProfile";
import JsonToProfile from "./ProfileParser";
import JsonToSeniority from "./SeniorityParser";


function JsonToDeveloperProfile(json: any): DeveloperProfile {
    const developerprofile = new DeveloperProfile(
        JsonToProfile(json.profile),
        JsonToSeniority(json.seniority),
        json.is_accepted,
        json.entrance_date
    );

    return developerprofile;
}

export default JsonToDeveloperProfile;