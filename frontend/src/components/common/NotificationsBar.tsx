import { useState, useEffect } from 'react';
import { getNotSeenNotifications } from '../../services/NotificationService';
import { NotificationBase } from '../../models/Notification';
import NotificationBarItem from './NotificationBarItem';


function NotificationBar() {
    const [notifications, setNotifications] = useState<NotificationBase[]>([]);

    const addNotification = (notification: NotificationBase) => {
        if (notifications.find((notificationlist) => (notification.getId() === notificationlist.getId() && notification.getMessage() === notificationlist.getMessage()))) {
            return;
        }

        setNotifications((prevNotifications) => [...prevNotifications, notification]);
        setTimeout(() => removeNotification(notification), 30000);
    };

    const removeNotification = (notification: NotificationBase) => {
        notification.setSeen(true);
        setNotifications((prevNotifications) => [...prevNotifications]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getNotSeenNotifications().then((notifications) => {
                notifications.map((notification) => {
                    addNotification(notification);
                });
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [notifications]);

    return (
        <div className="fixed lg:mx-8 lg:mb-16 left-0 bottom-0 space-y-4 z-20 text-white w-full max-w-lg p-4">
            {notifications.map((notification) => (
                <NotificationBarItem key={notification.getId() + notification.getMessage()} notification={notification} closeNotification={removeNotification} />
            ))}
        </div>
    );
};

export default NotificationBar;