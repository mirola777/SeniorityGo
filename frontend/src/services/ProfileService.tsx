import axios from "axios";
import { Profile } from "../models/Profile";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getAllProfiles(): Promise<Profile[]> {
    const response = axios.get(BACKEND_URL +  'profile/all');

    const profiles: Profile[] = (await response).data.map((json: any) => {
        const profile = new Profile(
            json.id,
            json.name,
            json.description,
            [],
            []
        );

        return profile;
    });

    return profiles;
}