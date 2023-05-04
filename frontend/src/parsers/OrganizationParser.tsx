import { Organization } from "../models/Organization";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function JsonToOrganization(json: any): Organization {
    const organization = new Organization(
        json.id,
        json.name,
        json.image ? BACKEND_URL + json.image : null
    );

    return organization;
}

export default JsonToOrganization;