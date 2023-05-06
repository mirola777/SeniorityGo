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
        json.profiles ? json.profiles.map((profile: any) => { return JsonToProfile(profile) }) : [],
        json.seniorities ? json.seniorities.map((seniority: any) => { return JsonToSeniority(seniority) }) : [],
        json.requirements ? json.requirements.map((requirement: any) => { return JsonToRequirement(requirement) }) : [],
    );

    return organization;
}

export default JsonToOrganization;