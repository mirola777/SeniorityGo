import { ReactComponent as NotificationIcon } from "../../assests/icons/Bell.svg";
import { useTranslation } from 'react-i18next';
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"
import { useEffect, useState } from "react";
import { getUserSession } from "../../services/AuthService";
import { Admin } from "../../models/Admin";
import { Developer } from "../../models/Developer";
import { Link } from "react-router-dom";
import UserDropdown from "../common/UserDropdown";
import UserNotificationsDropdown from "../common/UserNotificationsDropdown";


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
            <div className="flex mx-auto max-w-screen-2xl justify-between w-full px-2 sm:px-4 lg:px-8">
                <Link to="/" className="flex items-center mx-auto w-full justify-start gap-2">
                    <AppLogo className="h-8 my-3 lg:my-0 lg:h-16 lg:w-16"></AppLogo>
                    <span className="ml-2 whitespace-nowrap rounded-full bg-dark-blue-300 px-2.5 py-0.5 text-xs text-gray-100">
                        {t('admin_panel')}
                    </span>
                </Link>

                <div className="flex items-center w-full mx-auto justify-end">
                    {user && (
                        <div className="flex items-center w-full mx-auto justify-end gap-2">
                            <UserNotificationsDropdown></UserNotificationsDropdown>
                            <UserDropdown user={user}></UserDropdown>
                        </div>
                    )}
                </div>
            </div>

        </div>

    );
}

export default AdminHeader;