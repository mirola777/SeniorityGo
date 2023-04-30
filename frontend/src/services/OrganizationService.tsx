import axios from "axios";
import { Organization } from "../models/Organization";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getOrganization(id: number): Promise<Organization> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/organization/get/' + id + '/');
        const json = response.data;
        const organization = new Organization(
            json.id,
            json.name,
            BACKEND_URL + json.image,
            []
        );

        return organization;
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function updateOrganization(id: number, organizationDict: object): Promise<Organization> {
    try {
        console.log(organizationDict);
        const response = await axios.put(BACKEND_URL + '/api/organization/update/' + id + '/', organizationDict, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        
        const json = response.data;
        const organization = new Organization(
            json.id,
            json.name,
            json.image ? BACKEND_URL + json.image : null,
            []
        );

        console.log(organization);

        return organization;
    } catch (error: any) {
        throw error.response.data;
    }
}
