import axios from "axios";
import { RequestJoinProfile } from "../models/RequestJoinProfile";
import JsonToRequest from "../parsers/RequestParser";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export async function getRequestsJoinProfile(): Promise<RequestJoinProfile[]> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/request/joinprofile/');

        const requests: RequestJoinProfile[] = response.data.map((json: any) => {
            return JsonToRequest(json);
        });
        
        return requests;
    } catch (error: any) {
        throw error.response.data;
    }
}


export async function isUserRequestingJoinProfile(profile_id: number): Promise<boolean> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/request/joinprofile/isrequesting/' + profile_id + '/');
        return response.data.is_requesting;
    } catch (error: any) {
        console.log(error);
        throw error.response.data;
    }
}

