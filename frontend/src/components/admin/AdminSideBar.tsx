import { Link } from "react-router-dom";
import { ReactComponent as ProfilesIcon } from "../../assests/icons/RectangleGroup.svg"
import { ReactComponent as LogoutIcon } from "../../assests/icons/ArrowRightOnRectangle.svg"
import { ReactComponent as SenioritiesIcon } from "../../assests/icons/CodeBracket.svg"
import { ReactComponent as OrganizationIcon } from "../../assests/icons/BuildingOffice.svg"
import { ReactComponent as RequirementsIcon } from "../../assests/icons/Req.svg"
import { ReactComponent as UsersIcon } from "../../assests/icons/Users.svg"
import { ReactComponent as RequirementRequestIcon } from "../../assests/icons/Clipboard.svg"
import { ReactComponent as ProfileRequestIcon } from "../../assests/icons/ExclamationCircle.svg"
import { useTranslation } from 'react-i18next';
import { getUserSession, logout } from "../../services/AuthService";
import { useEffect, useState } from "react";
import { getOrganization } from "../../services/OrganizationService";
import { Organization } from "../../models/Organization";

function AdminSideBar() {
    // Translation component
    const { t } = useTranslation();
    
    const [organization, setOrganization] = useState<Organization | null>();

    useEffect(() => {
        getUserSession().then((user) => {
            if (user?.getUser() === null || user?.getUser() === undefined) {
                return;
            }

            getOrganization(user.getUser().getOrganization()).then((organizationResponse) => {
                setOrganization(organizationResponse);
            });
        });
        
    }, []);

    return (
        <div className="p-8 h-full ">
            <div className="h-full flex flex-col items-center w-52 text-gray-300 rounded-lg bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl overflow-hidden ">
                <Link to="/admin/" className="flex flex-col items-center w-full px-3 mt-3">
                    {organization && organization.getImage() !== null && <img src={organization.getImage()} alt="Organization Logo" className="py-4 w-32"></img>}
                </Link>

                <div className="w-full px-2">
                    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                        <Link to="/admin/organization" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                            <OrganizationIcon className="w-6 h-6 stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <span className="ml-2 text-sm font-medium">{t('organization')}</span>
                        </Link>
                        <Link to="/admin/profiles" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                            <ProfilesIcon className="w-6 h-6 stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <span className="ml-2 text-sm font-medium">{t('profiles')}</span>
                        </Link>
                        <Link to="/admin/seniorities" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                            <SenioritiesIcon className="w-6 h-6 stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <span className="ml-2 text-sm font-medium">{t('seniorities')}</span>
                        </Link>
                        <Link to="/admin/requirements" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                            <RequirementsIcon className="w-6 h-6 stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <span className="ml-2 text-sm font-medium">{t('requirements')}</span>
                        </Link>
                        <Link to="/admin/users" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                            <UsersIcon className="w-6 h-6 stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <span className="ml-2 text-sm font-medium">{t('users')}</span>
                        </Link>
                        <Link to="/admin/requests/requirements" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                            <RequirementRequestIcon className="w-6 h-6 stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <span className="ml-2 text-sm font-medium">{t('requirement_requests')}</span>
                        </Link>
                        <Link to="/admin/requests/profiles" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                            <ProfileRequestIcon className="w-6 h-6 stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <span className="ml-2 text-sm font-medium">{t('profile_requests')}</span>
                        </Link>
                    </div>
                </div>
                <button onClick={logout} className="flex items-center justify-center w-full h-16 mt-auto bg-gradient-to-r from-dark-blue-800 to-dark-blue-300 hover:bg-gray-700 hover:text-gray-300">
                    <LogoutIcon className="w-6 h-6 stroke-current" />
                    <span className="ml-2 text-sm font-medium">{t('logout')}</span>
                </button>
            </div>

        </div>
    );
}

export default AdminSideBar;