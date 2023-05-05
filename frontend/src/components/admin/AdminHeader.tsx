import { ReactComponent as NotificationIcon } from "../../assests/icons/Bell.svg";
import { useTranslation } from 'react-i18next';
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"
import { useEffect, useState } from "react";
import { getUserSession } from "../../services/AuthService";
import { Admin } from "../../models/Admin";
import { Developer } from "../../models/Developer";
import { Link } from "react-router-dom";


function AdminHeader() {
    // Translation component
    const { t } = useTranslation();

    const [user, setUser] = useState<Admin | Developer | null>(null);

    useEffect(() => {
        getUserSession().then((user) => {
            setUser(user);
        });
    }, []);

    return (
        <div className="w-full flex bg-gradient-to-r border-b border-blue-800 from-gray-800 to-dark-blue-800 shadow-2xl">
            <div className="flex mx-auto max-w-screen-2xl justify-between w-full px-8">
                <Link to="/" className="flex items-center mx-auto w-full justify-start gap-2">
                    <AppLogo className="h-16 w-16"></AppLogo>
                    <span className="ml-2 whitespace-nowrap rounded-full bg-dark-blue-300 px-2.5 py-0.5 text-xs text-gray-100">
                        {t('admin_panel')}
                    </span>
                </Link>

                <div className="flex items-center w-full mx-auto justify-end">
                    {user && (
                        <div className="flex items-center w-full mx-auto justify-end gap-2">
                            <div className="flex items-center gap-2">
                                <button className="block shrink-0 rounded-full bg-dark-blue-900 p-1.5 text-gray-400 shadow-sm hover:bg-dark-blue-300 hover:text-gray-100">
                                    <span className="sr-only">{t('notifications')}</span>
                                    <NotificationIcon className="h-5 w-5"></NotificationIcon>
                                </button>
                            </div>

                            <button className="block">
                                <img
                                    alt="User Avatar"
                                    src={user instanceof Developer ? user.getAvatar() : ""}
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                            </button>

                            <h3 className="text-white text-lg font-medium">{user?.getUser().getUsername()}</h3>
                        </div>
                    )}
                </div>
            </div>

        </div>

    );
}

export default AdminHeader;