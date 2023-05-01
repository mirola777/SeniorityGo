import { Seniority } from "../models/Seniority";

function JsonToSeniority(json: any): Seniority {
    const seniority = new Seniority(
        json.id,
        json.name,
        json.level
    );

    return seniority;
}

export default JsonToSeniority;