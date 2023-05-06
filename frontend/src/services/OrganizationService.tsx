import axios from "axios";
import { Organization } from "../models/Organization";
import JsonToOrganization from "../parsers/OrganizationParser";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getOrganization(id: number): Promise<Organization> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/organization/get/' + id + '/');
        const json = response.data;
        return JsonToOrganization(json);
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function getAllOrganizations(): Promise<Organization[]> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/organization/all/');

        const organizations: Organization[] = response.data.map((json: any) => {
            return JsonToOrganization(json);
        });


        return organizations;
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function getAllOrganizationsDetailed(): Promise<Organization[]> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/organization/all/detailed/');

        const organizations: Organization[] = response.data.map((json: any) => {
            return JsonToOrganization(json);
        });

        return organizations;
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
        return JsonToOrganization(json);

    } catch (error: any) {
        throw error.response.data;
    }
}
