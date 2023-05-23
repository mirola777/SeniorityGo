import axios from "axios";
import JsonToNotification from "../parsers/NotificationParser";
import { NotificationBase } from "../models/Notification";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export async function getAllNotifications(): Promise<NotificationBase[]> {
    if (!localStorage.getItem('access_token')) {
        return [];
    }

    const response = axios.get(BACKEND_URL +  '/api/notification/all/');

    const notifications: NotificationBase[] = (await response).data.map((json: any) => {
        return JsonToNotification(json);
    });

    return notifications;
}


export async function getNotSeenNotifications(): Promise<NotificationBase[]> {
    if (!localStorage.getItem('access_token')) {
        return [];
    }

    const response = axios.get(BACKEND_URL +  '/api/notification/notseen/');

    const notifications: NotificationBase[] = (await response).data.map((json: any) => {
        return JsonToNotification(json);
    });

    return notifications;
}
