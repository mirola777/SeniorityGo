import axios from "axios";
import { Organization } from "../models/Organization";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getOrganization(id: number): Promise<Organization> {
    try {
        const response = await axios.get(BACKEND_URL + 'organization/get/' + id);
        const json = response.data;
        const organization = new Organization(
            json.id,
            json.name,
            json.image,
            []
        );

        return organization;
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function updateOrganization(id: number, organizationDict: object): Promise<Organization> {
    try {
        const response = await axios.put(BACKEND_URL + 'organization/update/' + id, organizationDict);
        const json = response.data;
        const organization = new Organization(
            json.id,
            json.name,
            json.image,
            []
        );

        return organization;
    } catch (error: any) {
        throw error.response.data;
    }
}
