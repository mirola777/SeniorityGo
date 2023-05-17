import axios from "axios";
import { Developer } from "../models/Developer";
import JsonToUser from "../parsers/UserParser";
import CustomAxiosError from "../util/CustomAxiosError";
import { getUserSession } from "./AuthService";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export async function getOrganizationUsers(): Promise<(Developer)[]> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/developer/organization/');
        const users: Developer[] = response.data.map((json: any) => {
            return JsonToUser(json);
        });

        return users;
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function getOrganizationUsersDetailed(): Promise<(Developer)[]> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/developer/organization/detailed/');
        const users: Developer[] = response.data.map((json: any) => {
            return JsonToUser(json);
        });

        return users;
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function updateDeveloperAvatar(avatarDict: object): Promise<void> {
    try {
        const response = await axios.put(BACKEND_URL + '/api/developer/organization/avatar/', avatarDict, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        if(response.status !== 200) {
            const error = new Error() as CustomAxiosError;
            error.response = {
                data: {
                    errors: [
                        'avatar_error'
                    ]
                },
            };

            throw error;
        }

        await getUserSession(true);

        window.location.replace('/developer')
    } catch (error: any) {
        console.log(error);
        throw error.response.data;
    }
}