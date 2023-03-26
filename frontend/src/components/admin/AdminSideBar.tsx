import { Link } from "react-router-dom";
import { ReactComponent as ProfilesIcon } from "../../assests/icons/RectangleGroup.svg"
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"
import { ReactComponent as LogoutIcon } from "../../assests/icons/ArrowRightOnRectangle.svg"
import { useTranslation } from 'react-i18next';

function AdminSideBar() {
    // Translation component
    const { t } = useTranslation();

    return (
        <div className="p-8 h-full ">
            <div className="h-full flex flex-col items-center w-52 text-gray-300 rounded-lg bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl overflow-hidden ">
                <Link to="/admin/" className="flex flex-col items-center w-full px-3 mt-3">
                    <AppLogo className="w-32 h-32 fill-current" />
                </Link>

                <div className="w-full px-2">
                    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                        <Link to="/admin/profiles" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
                            <ProfilesIcon className="w-6 h-6 stroke-current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <span className="ml-2 text-sm font-medium">{t('profiles')}</span>
                        </Link>
                    </div>
                </div>
                <button className="flex items-center justify-center w-full h-16 mt-auto bg-gradient-to-r from-dark-blue-800 to-dark-blue-300 hover:bg-gray-700 hover:text-gray-300">
                    <LogoutIcon className="w-6 h-6 stroke-current" />
                    <span className="ml-2 text-sm font-medium">{t('logout')}</span>
                </button>
            </div>

        </div>
    );
}

export default AdminSideBar;