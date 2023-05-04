import { useTranslation } from 'react-i18next';

function DeveloperAbout() {
    // Translation component
    const { t } = useTranslation();

    return (
        <div className="overflow-y-auto scrollbar-none p-8 mx-auto w-full h-full">
            <div className="flex flex-col h-full space-y-8">

                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl'>

                    <h1 className="mb-4 text-4xl  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">About <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">About</span></h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div className='rounded-lg  p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl'>

                    <h1 className="mb-4 text-4xl  font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">We invest in the <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">world’s potential</span></h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
            </div>
        </div>


    );
}

export default DeveloperAbout;