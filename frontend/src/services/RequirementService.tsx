import axios from "axios";
import { Requirement } from "../models/Requirement";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getAllRequirements(): Promise<Requirement[]> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/requirement/all/');
        const requirements: Requirement[] = response.data.map((json: any) => {
            const requirement = new Requirement(
                json.id,
                json.name,
                json.description,
                json.image ? BACKEND_URL + json.image : null,
                json.points
            );

            return requirement;
        });

        return requirements;
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function createRequirement(requirementDict: object): Promise<Requirement> {
    try {
        const response = await axios.post(BACKEND_URL + '/api/requirement/create/', requirementDict, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        const json = response.data;
        const requirement = new Requirement(
            json.id,
            json.name,
            json.description,
            json.image ? BACKEND_URL + json.image : null,
            json.points
        );

        return requirement;
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function getRequirement(id: number): Promise<Requirement> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/requirement/get/' + id + '/');
        const json = response.data;
        const requirement = new Requirement(
            json.id,
            json.name,
            json.description,
            json.image ? BACKEND_URL + json.image : null,
            json.points
        );

        return requirement;
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function updateRequirement(id: number, requirementDict: object): Promise<Requirement> {
    try {
        const response = await axios.put(BACKEND_URL + '/api/requirement/update/' + id + '/', requirementDict, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const json = response.data;
        const requirement = new Requirement(
            json.id,
            json.name,
            json.description,
            json.image ? BACKEND_URL + json.image : null,
            json.points
        );

        return requirement;
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function deleteRequirement(id: number): Promise<void> {
    try {
        await axios.delete(BACKEND_URL + '/api/requirement/delete/' + id + '/');
    } catch (error: any) {
        throw error.response.data;
    }
}