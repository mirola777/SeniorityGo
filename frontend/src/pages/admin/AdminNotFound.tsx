import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PokemonSad from '../../assests/images/PokemonSad.png';

function AdminNotFound() {
    // Translation component
    const { t } = useTranslation();

    return (
        <div className='py-8 pr-8 h-full mx-auto w-full space-y-8'>
            <div className='w-full h-full flex flex-col rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                <div className="grid h-full px-4 place-content-center">
                    <div className="text-center flex flex-col items-center space-y-2">
                        <h1 className="font-black text-gray-600 text-9xl">404</h1>

                        <p className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                            {t('page_not_found')}
                        </p>
                        
                        <div className="flex flex-col items-center space-y-24">
                            <p className="text-xl  text-gray-500">{t('page_not_found_body')}</p>
                            <img src={PokemonSad} alt="Pokemon sad" className="w-48 h-48" />
                            <Link to="/admin/" className=" inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                                <span
                                    className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                    {t('go_back')}
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminNotFound;