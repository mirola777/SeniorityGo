import axios from "axios";
import { Developer } from "../models/Developer";
import JsonToUser from "../parsers/UserParser";

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