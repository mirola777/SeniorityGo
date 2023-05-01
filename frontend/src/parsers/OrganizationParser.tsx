import { Organization } from "../models/Organization";
import JsonToProfile from "./ProfileParser";
import JsonToRequirement from "./RequirementParser";
import JsonToSeniority from "./SeniorityParser";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function JsonToOrganization(json: any): Organization {
    const profiles = json.profiles.map((json: any) => JsonToProfile(json));
    const seniorities = json.seniorities.map((json: any) => JsonToSeniority(json));
    const requirements = json.requirements.map((json: any) => JsonToRequirement(json));

    const organization = new Organization(
        json.id,
        json.name,
        json.image ? BACKEND_URL + json.image : null,
        profiles,
        seniorities,
        requirements
    );

    return organization;
}

export default JsonToOrganization;