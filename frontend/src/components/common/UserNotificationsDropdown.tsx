import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as NotificationIcon } from "../../assests/icons/Bell.svg";
import { NotificationBase } from '../../models/Notification';
import { getAllNotifications } from '../../services/NotificationService';
import UserNotificationDropdownItem from './UserNotificationsDropdownItem';


function UserNotificationsDropdown() {
    // Translation component
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState<NotificationBase[]>([]);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isOpen) return;

            getAllNotifications().then((notificationsa) => {
                setNotifications(notificationsa);
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [setNotifications, isOpen, notifications]);


    const toggleDropdown = () => {
        if (!isOpen) {
            getAllNotifications().then((notificationsa) => {
                setNotifications(notificationsa);
            });
        }

        setIsOpen(!isOpen);
    };

    return (
        <div ref={dropdownRef} className="dropdown w-full justify-end flex relative">
            <button onClick={toggleDropdown} className="block shrink-0 rounded-full bg-dark-blue-900 p-1.5 text-gray-400 shadow-sm hover:bg-dark-blue-300 hover:text-gray-100">
                <span className="sr-only">{t('notifications')}</span>
                <NotificationIcon className="h-5 w-5"></NotificationIcon>
            </button>
            {isOpen && (
                <div className="dropdown-menu overflow-y-auto absolute right-0 mt-10 p-2 lg:p-4 rounded-lg shadow-2xl divide-y w-full max-w-2xl border border-blue-800  bg-dark-blue-800 divide-blue-800">
                    <h2 className="text-lg lg:text-xl text-white font-semibold mb-2">{t('notifications')}</h2>
                    <div className="flex flex-col  divide-blue-800 divide-y h-72 scrollbar-none overflow-y-auto">
                        {notifications.map((notification) => (
                            <UserNotificationDropdownItem key={notification.getId() + notification.getMessage()} notification={notification} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserNotificationsDropdown;