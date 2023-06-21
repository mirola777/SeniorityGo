import axios from "axios";
import { Profile } from "../models/Profile";
import JsonToProfile from "../parsers/ProfileParser";
import { getUserSession } from "./AuthService";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export async function createProfile(profileDict: object): Promise<Profile> {
    try {
        const response = await axios.post(BACKEND_URL + '/api/profile/create/', profileDict);

        const json = response.data;
        return JsonToProfile(json);
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function updateProfile(id: number, profileDict: object): Promise<Profile> {
    try {
        const response = await axios.put(BACKEND_URL + '/api/profile/update/' + id + '/', profileDict);
        const json = response.data;
        return JsonToProfile(json);
    } catch (error: any) {
        throw error.response.data;
    }
}



export async function deleteProfile(id: number): Promise<void> {
    try {
        await axios.delete(BACKEND_URL + '/api/profile/delete/' + id + '/');
    } catch (error: any) {
        throw error.response.data;
    }
}



export async function getAllProfiles(): Promise<Profile[]> {
    const response = axios.get(BACKEND_URL +  '/api/profile/all/');

    const profiles: Profile[] = (await response).data.map((json: any) => {
        return JsonToProfile(json);
    });

    if (profiles.length > 0) {
        await getUserSession(true);
    }

    return profiles;
}


export async function getOrganizationProfiles(): Promise<Profile[]> {
    const response = axios.get(BACKEND_URL +  '/api/profile/organization/');

    const profiles: Profile[] = (await response).data.map((json: any) => {
        return JsonToProfile(json);
    });

    if (profiles.length > 0) {
        await getUserSession(true);
    }

    return profiles;
}


export async function getOrganizationProfilesDetailed(): Promise<Profile[]> {
    const response = axios.get(BACKEND_URL +  '/api/profile/organization/detailed/');

    const profiles: Profile[] = (await response).data.map((json: any) => {
        
        return JsonToProfile(json);
    });

    if (profiles.length > 0) {
        await getUserSession(true);
    }

    return profiles;
}


export async function getProfile(id: number): Promise<Profile> {
    try {
        const response = await axios.get(BACKEND_URL +  '/api/profile/get/' + id + '/');
        
        const json = response.data;
        return JsonToProfile(json);
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function addDeveloperToProfile(profile_id: number): Promise<void> {
    try {
        await axios.post(BACKEND_URL +  '/api/profile/organization/developer/', {
            profile_id: profile_id
        });
        
        await getUserSession(true);
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function rejectDeveloperToProfile(profile_id: number, developer_id: number): Promise<void> {
    try {
        await axios.post(BACKEND_URL +  '/api/profile/organization/developer/reject/', {
            profile_id: profile_id,
            developer_id: developer_id
        });
        
        await getUserSession(true);
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function acceptDeveloperToProfile(profile_id: number, developer_id: number): Promise<void> {
    try {
        await axios.post(BACKEND_URL +  '/api/profile/organization/developer/accept/', {
            profile_id: profile_id,
            developer_id: developer_id
        });
        
        await getUserSession(true);
    } catch (error: any) {
        throw error.response.data;
    }
}