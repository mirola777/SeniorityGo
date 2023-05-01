import axios from "axios";
import { Developer } from "../models/Developer";
import { Admin } from "../models/Admin";
import CustomAxiosError from "../util/CustomAxiosError";
import JsonToUser from "../parsers/UserParser";


const USER_STORAGE_KEY = 'user';
const USER_STORAGE_USER_TIME = 'user_time';
const USER_STORAGE_EXPIRE = 30 * 1000; // 30 seconds
const TOKEN_ACCESS = 'access_token';
const TOKEN_REFRESH = 'refresh_token';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


interface LoginCredentials {
    username: string;
    password: string;
}


interface RegisterCredentials {
    user: {
        username: string;
        email: string;
        password: string;

    }
    first_name: string;
    second_name?: string | null;
    last_name: string;
    birthday: string;
    phone_number: string;
    avatar?: string;
    confirm_password: string;
    organization: number;
}


export async function login(credentials: LoginCredentials): Promise<void> {
    try {
        const data = await axios.post(BACKEND_URL + '/api/auth/token/', credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });

        localStorage.clear();
        localStorage.setItem(TOKEN_ACCESS, data.data.access);
        localStorage.setItem(TOKEN_REFRESH, data.data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.access}`;
        window.location.reload();
    } catch (error: any) {
        const err = new Error(JSON.stringify({ 'errors': ['credentials_wrong'] }));
        throw err;

    }
}


export async function register(credentials: RegisterCredentials): Promise<void> {
    try {

        if (credentials.user.password !== credentials.confirm_password) {
            const error = new Error() as CustomAxiosError;
            error.response = {
                data: {
                    errors: [
                        'passwords_not_match'
                    ]
                },
            };

            throw error;
        }

        if (credentials.second_name === '') {
            delete credentials.second_name;
        }

        if (credentials.avatar === '') {
            delete credentials.avatar;
        }

        await axios.post(BACKEND_URL + '/api/developer/create/', credentials);

        const newCredentials = {
            username: credentials.user.username,
            password: credentials.user.password
        }

        login(newCredentials);

    } catch (error: any) {
        throw error.response.data;
    }
}


export async function refreshToken(): Promise<void> {
    try {
        const response = await axios.post(BACKEND_URL + '/api/auth/token/refresh/',
            {
                refresh: localStorage.getItem(TOKEN_REFRESH),
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            },
        );

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
            localStorage.setItem(TOKEN_ACCESS, response.data.access);
            localStorage.setItem(TOKEN_REFRESH, response.data.refresh);
        }
    } catch (e) {
        axios.defaults.headers.common['Authorization'] = null;
        localStorage.removeItem(TOKEN_ACCESS);
        localStorage.removeItem(TOKEN_REFRESH);
        window.location.reload();
    }

}


export async function logout(): Promise<void> {
    try {
        await axios.post(BACKEND_URL + "/api/auth/logout/",
            {
                refresh_token: localStorage.getItem("refresh_token"),
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            },
        );

    } catch (e) {

    }

    axios.defaults.headers.common['Authorization'] = null;
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(TOKEN_ACCESS);
    localStorage.removeItem(TOKEN_REFRESH);
    window.location.reload();
}


async function getUserSessionFromBack(): Promise<any | null> {
    try {
        const response = await axios.get(BACKEND_URL + '/api/auth/session/');
        const json = response.data;
        if (json === null || json === undefined) return null;

        return json;

    } catch (error: any) {
        throw error.response.data;
    }
}


export async function getUserSession(): Promise<Developer | Admin | null> {
    let user = localStorage.getItem(USER_STORAGE_KEY);
    let time = localStorage.getItem(USER_STORAGE_USER_TIME) as unknown as number;
    if (!time) {
        time = new Date().getTime();
        localStorage.setItem(USER_STORAGE_USER_TIME, time.toString());
    };

    const now = new Date();

    if (now.getTime() - time > USER_STORAGE_EXPIRE) {
        localStorage.removeItem(USER_STORAGE_KEY);
        localStorage.setItem(USER_STORAGE_USER_TIME, now.getTime().toString());
        user = null;
    }

    if (user) {
        const json = JSON.parse(user);
        return JsonToUser(json);
    }

    try {
        const user = await getUserSessionFromBack();
        if (user !== null) {
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
            const json = JSON.parse(JSON.stringify(user));
            return JsonToUser(json);
        }
    } catch (error) {
        return null;
    }

    return null;
}