import { ReactComponent as NotificationIcon } from "../../assests/icons/Bell.svg";
import { useTranslation } from 'react-i18next';
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"
import { useState, useEffect } from "react";
import { getUserSession, logout } from "../../services/AuthService";
import { Link } from "react-router-dom";
import { Admin } from "../../models/Admin";
import { Developer } from "../../models/Developer";


function DeveloperHeader() {
    // Translation component
    const { t } = useTranslation();

    const [user, setUser] = useState<Admin | Developer | null>(null);

    useEffect(() => {
        getUserSession().then((user) => {
            setUser(user);
        });
    }, [setUser]);

    return (
        <div className="w-full flex bg-gradient-to-r border-b border-blue-800 from-gray-800 to-dark-blue-800 shadow-2xl">
            <div className="flex mx-auto max-w-screen-2xl justify-between w-full px-8">
                <Link to="/" className="flex items-center mx-auto w-full justify-start gap-2">
                    <AppLogo className="h-16 w-16"></AppLogo>
                </Link>

                <div className="flex items-center gap-4">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center w-full mx-auto justify-end gap-2">
                    {user ? (
                        <div className="flex items-center w-full mx-auto justify-end gap-2">
                            <div className="flex items-center gap-4">
                                <button className="block shrink-0 rounded-full bg-dark-blue-900 p-1.5 text-gray-400 shadow-sm hover:bg-dark-blue-300 hover:text-gray-100">
                                    <span className="sr-only">{t('notifications')}</span>
                                    <NotificationIcon className="h-5 w-5"></NotificationIcon>
                                </button>
                            </div>

                            <span aria-hidden="true" className="block h-6 w-px rounded-full bg-dark-blue-800"></span>

                            <button className="block">
                                <img
                                    alt=""
                                    src="https://i.redd.it/pokémon-themed-profile-icon-v0-c8z5m7o3osk81.jpg?s=a03d2cbbd1f41c453f88fe1b7d77f7c0832e8d13"
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                            </button>

                            <h3 className="text-white text-lg font-medium">{user?.getUser().getUsername()}</h3>
                            <button onClick={logout} className="inline-block rounded-full bg-gradient-to-r from-red-700 to-red-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                                <span className="block rounded-full bg-dark-blue-800/60 px-4 py-1 text-sm font-medium hover:bg-dark-blue-800/40">
                                    {t('logout')}
                                </span>
                            </button>
                        </div>
                    ) : (
                        <div className="space-x-2">
                            <Link to="/register" className="inline-block rounded-full bg-gradient-to-r text-white focus:outline-none focus:ring active:text-opacity-75">
                                <span className="block rounded-full bg-dark-blue-800/60 px-4 py-1 text-sm font-medium hover:underline hover:bg-dark-blue-800/40">
                                    {t('register')}
                                </span>
                            </Link>
                            <Link to="/login" className="inline-block rounded-full bg-gradient-to-r  from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                                <span className="block rounded-full bg-dark-blue-800/60 px-4 py-1 text-sm font-medium hover:bg-dark-blue-800/40">
                                    {t('login')}
                                </span>
                            </Link>
                        </div>
                    )
                    }

                </div>
            </div>

        </div>

    );
}

export default DeveloperHeader;