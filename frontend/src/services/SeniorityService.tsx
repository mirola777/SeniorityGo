import axios from "axios";
import { Seniority } from "../models/Seniority";
import JsonToSeniority from "../parsers/SeniorityParser";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getAllSeniorities(): Promise<Seniority[]> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/seniority/all/');
        const seniorities: Seniority[] = response.data.map((json: any) => {
            return JsonToSeniority(json);
        });

        return seniorities;
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function getOrganizationSeniorities(): Promise<Seniority[]> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/seniority/organization/');
        const seniorities: Seniority[] = response.data.map((json: any) => {
            return JsonToSeniority(json);
        });

        return seniorities;
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function createSeniority(seniorityDict: object): Promise<Seniority> {
    try {
        const response = await axios.post(BACKEND_URL + '/api/seniority/create/', seniorityDict);
        const json = response.data;
        return JsonToSeniority(json);
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function getSeniority(id: number): Promise<Seniority> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/seniority/get/' + id + '/');
        const json = response.data;
        return JsonToSeniority(json);
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function updateSeniority(id: number, seniorityDict: object): Promise<Seniority> {
    try {
        const response = await axios.put(BACKEND_URL + '/api/seniority/update/' + id + '/', seniorityDict);
        const json = response.data;
        return JsonToSeniority(json);
    } catch (error: any) {
        throw error.response.data;
    }
}

export async function deleteSeniority(id: number): Promise<void> {
    try {
        await axios.delete(BACKEND_URL + '/api/seniority/delete/' + id + '/');
    } catch (error: any) {
        throw error.response.data;
    }
}
