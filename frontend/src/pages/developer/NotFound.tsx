import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PokemonSad from '../../assests/images/PokemonSad.png';

function NotFound() {
    // Translation component
    const { t } = useTranslation();

    return (
        <div className='flex py-8 w-full h-full items-center flex-col space-y-2 text-center overflow-y-auto scrollbar-none'>
            <h1 className="font-black text-gray-100 text-9xl">404</h1>
            <p className="text-5xl font-bold tracking-tight text-gray-500 sm:text-7xl">
                {t('page_not_found')}
            </p>
            <div className="flex flex-col items-center space-y-24">
                <p className="text-xl text-gray-600">{t('page_not_found_body')}</p>
                <img src={PokemonSad} alt="Pokemon sad" className="w-48 h-48" />
                <Link to="/" className="inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                    <span className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                        {t('go_back')}
                    </span>
                </Link>
            </div>
        </div>

    );
}

export default NotFound;