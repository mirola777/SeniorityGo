import { ReactComponent as NotificationIcon } from "../../assests/icons/Bell.svg";
import { useTranslation } from 'react-i18next';
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"
import { useState, useEffect } from "react";
import { getUserSession } from "../../services/AuthService";
import { Link } from "react-router-dom";
import { Admin } from "../../models/Admin";
import { Developer } from "../../models/Developer";
import { getOrganization } from "../../services/OrganizationService";
import { Organization } from "../../models/Organization";
import UserDropdown from "../common/UserDropdown";


function DeveloperHeader() {
    // Translation component
    const { t } = useTranslation();

    const [user, setUser] = useState<Admin | Developer | null>(null);
    const [organization, setOrganization] = useState<Organization | null>();

    useEffect(() => {
        getUserSession().then((user) => {
            setUser(user);

            if (user?.getUser() === null || user?.getUser() === undefined) {
                return;
            }

            getOrganization(user.getUser().getOrganization()).then((organizationResponse) => {
                setOrganization(organizationResponse);
            });
        });

    }, []);

    useEffect(() => {
        getUserSession().then((user) => {
            setUser(user);
        });
    }, []);

    return (
        <div className="w-full flex bg-gradient-to-r border-b border-blue-800 from-gray-800 to-dark-blue-800 shadow-2xl">
            <div className="flex mx-auto max-w-screen-2xl justify-between w-full px-2 sm:px-4 lg:px-8">
                <Link to="/" className="flex items-center mx-auto w-full justify-start gap-2 py-4">
                    {user && organization && organization.getImage() !== null ? (
                        <img src={organization.getImage()} alt="Organization Logo" className="h-8 object-cover"></img>
                    ) : (<AppLogo className="h-8"></AppLogo>)}
                </Link>

                <div className="flex items-center gap-4">
                    <ul className="items-center hidden sm:flex  flex-col w-full font-medium sm:flex-row sm:space-x-8 ">
                        <li className="w-full">
                            <Link to="/organizations" className="block text-white rounded whitespace-nowrap" aria-current="page">{t('organizations')}</Link>
                        </li>
                        {user && (<li className="w-full">
                            <Link to="/profiles" className="block text-white rounded whitespace-nowrap" aria-current="page">{t('profiles')}</Link>
                        </li>)}
                        {user && (<li className="w-full">
                            <Link to="/leaderboard" className="block text-white rounded whitespace-nowrap" aria-current="page">{t('leaderboard')}</Link>
                        </li>)}
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

                            <UserDropdown user={user}></UserDropdown>
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