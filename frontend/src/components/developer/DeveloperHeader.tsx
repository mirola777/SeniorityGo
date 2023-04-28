import { ReactComponent as NotificationIcon } from "../../assests/icons/Bell.svg";
import { useTranslation } from 'react-i18next';
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"
import { useState, useEffect } from "react";

function DeveloperHeader() {
    // Translation component
    const { t } = useTranslation();

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    return (
        <div className="w-full flex bg-gradient-to-r border-b border-blue-800 from-gray-800 to-dark-blue-800 shadow-2xl">
            <div className="flex mx-auto max-w-screen-2xl justify-between w-full px-8">
                <div className="flex items-center mx-auto w-full justify-start gap-2">
                    <AppLogo className="h-16 w-16"></AppLogo>
                </div>

                <div className="flex items-center gap-4">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center w-full mx-auto justify-end gap-2">
                    {isAuth ? (
                        <div>
                            <div className="flex items-center gap-4">
                                <button className="block shrink-0 rounded-full bg-dark-blue-900 p-2.5 text-gray-400 shadow-sm hover:bg-dark-blue-300 hover:text-gray-100">
                                    <span className="sr-only">{t('notifications')}</span>
                                    <NotificationIcon className="h-5 w-5"></NotificationIcon>
                                </button>
                            </div>

                            <span aria-hidden="true" className="block h-6 w-px rounded-full bg-dark-blue-800"></span>

                            <button className="block">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            </button>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-white text-lg font-medium">INICIA SESION CAREMONDA</h2>
                        </div>
                    )
                    }

                </div>
            </div>

        </div>

    );
}

export default DeveloperHeader;