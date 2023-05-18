import { t } from 'i18next';
import PokemonAdvice from '../../assests/images/PokemonAdvice.png';

interface AdviceCardProps {
    message: string;
}

function AdviceCard({ message }: AdviceCardProps) {

    return (
        <div className="w-full transition ease-in-out hover:scale-105 max-w-lg">
            <div className=" block">
                <div className="flex flex-col my-2 space-y-8 alig text-center">
                    <div className="rounded-2xl max-w-lg bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
                        <div className="transition block rounded-xl duration-150 bg-gray-800/80 p-4 sm:p-6 lg:p-8">
                            <figure className="max-w-screen-md mx-auto text-center">
                                <p className="text-2xl italic font-medium  text-white">{t('advice')}</p>
                                <svg aria-hidden="true" className="w-12 h-12 mx-auto my-4 text-gray-200" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                                <p className="text-md text-justify italic font-medium text-white">{message}</p>
                            </figure>
                        </div>
                    </div>

                    <div className='flex justify-end pr-4'>
                        <img className='w-[50%] max-w-md' src={PokemonAdvice} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdviceCard;