import axios from "axios";
import { Seniority } from "../models/Seniority";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function login(): Promise<void> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/token');
        
        const seniorities: Seniority[] = response.data.map((json: any) => {
            const seniority = new Seniority(
                json.id,
                json.name,
                json.level
            );

            return seniority;
        });

    } catch (error: any) {
        throw error.response.data;
    }
}