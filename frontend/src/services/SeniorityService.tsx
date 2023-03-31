import axios from "axios";
import { Seniority } from "../models/Seniority";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getAllSeniorities(): Promise<Seniority[]> {
    try {
        const response = await axios.get(BACKEND_URL + 'seniority/all');
        const seniorities: Seniority[] = response.data.map((json: any) => {
            const seniority = new Seniority(
                json.id,
                json.name,
                json.level
            );

            return seniority;
        });

        return seniorities;
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function createSeniority(seniorityDict: object): Promise<Seniority> {
    try {
        const response = await axios.post(BACKEND_URL + 'seniority/create', seniorityDict);
        const json = response.data;
        const seniority = new Seniority(
            json.id,
            json.name,
            json.level
        );

        return seniority;
    } catch (error: any) {
        throw error.response.data;
    }
}