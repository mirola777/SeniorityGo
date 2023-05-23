import { useState, useRef, useEffect } from 'react';
import { ReactComponent as BarIcon } from "../../assests/icons/Bars4.svg";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Admin } from '../../models/Admin';
import { Developer } from '../../models/Developer';
import { Organization } from '../../models/Organization';
import { getUserSession } from '../../services/AuthService';
import { getOrganization } from '../../services/OrganizationService';
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"

function DeveloperSidebar() {
    // Translation component
    const { t } = useTranslation();

    const [user, setUser] = useState<Admin | Developer | null>(null);
    const [organization, setOrganization] = useState<Organization | null>();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target as Node)
        ) {
            setIsSidebarOpen(false);
        }
    };

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

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex">
            <div className={`fixed lg:hidden z-30 shadow-2xl left-0 h-full w-64 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 lg:block lg:relative`}
                ref={sidebarRef}>

                <div className="h-full flex flex-col items-center text-gray-300  bg-gradient-to-t from-gray-800 to-dark-blue-800 shadow-2xl overflow-y-auto scrollbar-none ">
                    <div className="w-full px-2">
                        <Link to="/" onClick={toggleSidebar} className="flex items-center mx-auto w-full justify-center gap-2 pt-16 pb-4">
                            {user && organization && organization.getImage() !== null ? (
                                <img src={organization.getImage()} alt="Organization Logo" className="w-1/3 object-cover"></img>
                            ) : (<AppLogo className="w-1/3"></AppLogo>)}
                        </Link>
                        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">

                            {user && (
                                <div className="flex flex-col items-center w-full">
                                    <Link to="/profiles" onClick={toggleSidebar} className="flex items-center w-full h-8 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                                        <span className="ml-2 text-lg font-medium">{t('profiles')}</span>
                                    </Link>
                                    <Link to="/leaderboard" onClick={toggleSidebar} className="flex items-center w-full h-8 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">

                                        <span className="ml-2 text-lg font-medium">{t('leaderboard')}</span>
                                    </Link>
                                </div>
                            )}

                            <Link to="/organizations" onClick={toggleSidebar} className="flex items-center w-full h-8 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                                <span className="ml-2 text-lg font-medium">{t('organizations')}</span>
                            </Link>
                            <Link to="/pokemons" onClick={toggleSidebar} className="flex items-center w-full h-8 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                                <span className="ml-2 text-lg font-medium">{t('pokemons')}</span>
                            </Link>
                            <Link to="/about" onClick={toggleSidebar} className="flex items-center w-full h-8 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                                <span className="ml-2 text-lg font-medium">{t('about')}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <button className=" py-3 text-gray-400 lg:hidden" onClick={toggleSidebar}>
                <BarIcon className="w-6 h-8 stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </button>
        </div>
    );
};

export default DeveloperSidebar;