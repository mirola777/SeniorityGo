import axios from "axios";
import { ApiResponse } from "../models/ApiResponse";


export const headersFactory = () => {
	const token = localStorage.getItem("token") ?? "";
	return {
		"Content-Type": "application/json",
		Authorization: `Token ${token}`,
	};
};


export const getBase = <T>(apiEndpoint: string) => {
	return async (id: number): Promise<T> => {
		const headers = headersFactory();
		let url = `${process.env.REACT_APP_BACKEND_URL}${apiEndpoint}${id}`;
		const response = await axios.get<T>(url, { headers });
		return response.data;
	};
};


export const listBase = <T>(apiEndpoint: string) => {
	return async (): Promise<ApiResponse<T>> => {
		let url = `${process.env.REACT_APP_BACKEND_URL}${apiEndpoint}`;
		const headers = headersFactory();
		const response = await axios.get<ApiResponse<T>>(url, { headers });
		return response.data;
	};
};


export const postBase = <T extends object>(apiEndpoint: string) => {
	return async (data: object): Promise<T> => {
		const form = new FormData();
		Object.entries(data).forEach(([k, v]) => form.append(k, v));
		let url = `${process.env.REACT_APP_BACKEND_URL}${apiEndpoint}`;
		const headers = headersFactory();
		const response = await axios.post<T>(url, form, { headers });
		return response.data;
	};
};


export const patchBase = <T>(apiEndpoint: string) => {
	return async (data: object, id: number): Promise<T> => {
		let url = `${process.env.REACT_APP_BACKEND_URL}${apiEndpoint}${id}/`;
		const form = new FormData();
		Object.entries(data).forEach(([k, v]) => form.append(k, v));
		const headers = headersFactory();
		const response = await axios.patch<T>(url, form, { headers });
		return response.data;
	};
};


export const deleteBase = (apiEndpoint: string) => {
	return async (id: number): Promise<undefined> => {
		let url = `${process.env.REACT_APP_BACKEND_URL}${apiEndpoint}${id}/`;
		const headers = headersFactory();
		const response = await axios.delete(url, { headers });
		return response.data;
	};
};