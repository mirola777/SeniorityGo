import axios from "axios";
import { Developer } from "../models/Developer";
import { User } from "../models/User";
import { Admin } from "../models/Admin";
import CustomAxiosError from "../util/CustomAxiosError";


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
        localStorage.setItem('access_token', data.data.access);
        localStorage.setItem('refresh_token', data.data.refresh);
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
                refresh: localStorage.getItem('refresh_token'),
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
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
        }
    } catch (e) {
        axios.defaults.headers.common['Authorization'] = null;
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
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
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.reload();
}


export async function getUserSession(): Promise<Developer | Admin | null> {
    try {
        console.log('getUserSession');
        const response = await axios.get(BACKEND_URL + '/api/auth/session/');
        console.log(response.data);
        const json = response.data;

        if (json.role === 'developer') {
            const developer = new Developer(
                new User(
                    json.user.id,
                    json.user.username,
                    json.user.email
                ),
                json.first_name,
                json.second_name,
                json.last_name,
                json.birthday,
                json.avatar ? BACKEND_URL + json.avatar : null,
                json.phone_number,
                json.is_activated,
                [],
                []
            );

            return developer;
        } else if (json.role === 'admin') {
            const admin = new Admin(
                new User(
                    json.user.id,
                    json.user.email,
                    json.user.username
                )
            );

            return admin;
        }

        return null;

    } catch (error: any) {
        console.log(error.response.data);
        throw error.response.data;
    }
}