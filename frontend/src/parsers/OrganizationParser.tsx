import { Organization } from "../models/Organization";
import JsonToProfile from "./ProfileParser";
import JsonToRequirement from "./RequirementParser";
import JsonToSeniority from "./SeniorityParser";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function JsonToOrganization(json: any): Organization {
    const organization = new Organization(
        json.id,
        json.name,
        json.image ? BACKEND_URL + json.image : null,
        json.profiles.map((json: any) => JsonToProfile(json)),
        json.seniorities.map((json: any) => JsonToSeniority(json)),
        json.requirements.map((json: any) => JsonToRequirement(json))
    );

    return organization;
}

export default JsonToOrganization;