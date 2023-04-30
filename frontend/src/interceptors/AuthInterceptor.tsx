import axios from "axios";
import { refreshToken } from "../services/AuthService";

let refresh = false;

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

axios.interceptors.response.use(resp => resp, async (error) => {
    if (error.response.status === 401 && !refresh && error.response.config.url !== BACKEND_URL + '/api/auth/token/') {
        refresh = true;
        await refreshToken();
        return axios(error.config);
    }

    return Promise.reject(error);
});