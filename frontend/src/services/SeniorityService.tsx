import axios from "axios";
import { Seniority } from "../models/Seniority";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getAllSeniorities(): Promise<Seniority[]> {
    const response = axios.get(BACKEND_URL +  'seniority/all');

    const seniorities: Seniority[] = (await response).data.map((json: any) => {
        const seniority = new Seniority(
            json.id,
            json.name,
            json.level
        );

        return seniority;
    });

    return seniorities;
}