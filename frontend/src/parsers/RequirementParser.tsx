import { Requirement } from "../models/Requirement";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function JsonToRequirement(json: any): Requirement {
    const requirement = new Requirement(
        json.id,
        json.name,
        json.description,
        json.image ? BACKEND_URL + json.image : null,
        json.points
    );

    return requirement;
}

export default JsonToRequirement;