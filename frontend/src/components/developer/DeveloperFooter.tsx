import { useTranslation } from 'react-i18next';
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg"
import { Link } from 'react-router-dom';

function DeveloperFooter() {
    // Translation component
    const { t } = useTranslation();

    return (
        <div className="hidden lg:block bg-gradient-to-r border-t border-blue-800 from-gray-800 to-dark-blue-800 shadow-2xl">
            <div className="w-full mx-auto max-w-screen-2xl px-8 py-4 flex justify-between">
                <div className="flex justify-center items-center space-x-4">
                    <AppLogo className="w-10 h-8" />
                    <span className="text-xs sm:text-sm sm:text-center text-gray-400">{t('app_footer')}</span>
                </div>
           
                <ul className="hidden sm:flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0 space-x-6">
                    <li>
                        <Link to="about" className="hover:underline">{t('about')}</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DeveloperFooter;