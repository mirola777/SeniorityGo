import axios from "axios";
import { Profile } from "../models/Profile";
import JsonToProfile from "../parsers/ProfileParser";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getAllProfiles(): Promise<Profile[]> {
    const response = axios.get(BACKEND_URL +  '/api/profile/all/');

    const profiles: Profile[] = (await response).data.map((json: any) => {
        return JsonToProfile(json);
    });

    return profiles;
}


export async function getOrganizationProfiles(): Promise<Profile[]> {
    const response = axios.get(BACKEND_URL +  '/api/profile/organization/');

    const profiles: Profile[] = (await response).data.map((json: any) => {
        return JsonToProfile(json);
    });

    return profiles;
}