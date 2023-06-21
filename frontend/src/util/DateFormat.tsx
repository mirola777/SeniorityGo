import { useTranslation } from "react-i18next";

export function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


export function formatDateTimeNotification(date: Date, t: any): string {
    const now = new Date();
    const diff = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);

    if (diff < 5) {
        return t('some_seconds_ago');
    } else if (diff < 60) {
        return t('seconds_ago', { count: diff });
    } else if (diff < 3600) {
        const minutes = Math.floor(diff / 60);
        return minutes === 1 ?  t('a_minute_ago') : t('minutes_ago', { count: minutes });
    } else if (diff < 86400) {
        const hours = Math.floor(diff / 3600);
        return hours === 1 ?  t('an_hour_ago') : t('hours_ago', { count: hours });
    } else if (diff < 2592000) {
        const days = Math.floor(diff / 86400);
        return days === 1 ?  t('a_day_ago') : t('days_ago', { count: days });
    } else {
        return date.toLocaleDateString();
    }
}