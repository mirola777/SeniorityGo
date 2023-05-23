import { useTranslation } from "react-i18next";
import CapyDevLogo from "../../assests/images/CapyDev.png";


function DeveloperAbout() {
    const { t } = useTranslation();

    return (
        <div className="overflow-y-auto scrollbar-none  mx-auto flex flex-col items-center w-full h-full">
            <section className=" w-full bg-gradient-to-b from-transparent to-gray-900">
                <div className="max-w-screen-2xl w-full flex-col lg:flex-row flex mx-auto p-4 lg:p-8">
                    <div className="mr-auto place-self-center space-y-4 lg:col-span-7">
                        <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight leading-none md:text-7xl xl:text-9xl text-white">{t('about')}</h1>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5">
                        <img src={CapyDevLogo} className="w-96 h-96" />
                    </div>
                </div>
            </section>

            <section className="w-full p-4 lg:p-8 bg-gray-900 mx-auto">
                <div className="relative max-w-screen-xl w-full mx-auto">
                    <div className="space-y-0 lg:space-y-4">
                        <div className="max-w-screen-2xl w-full flex mx-auto p-4 lg:p-8">
                            <div className="mb-48 place-self-center space-y-4 lg:col-span-7">
                                <h1 className="hidden lg:block max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">{t('capydev')}</h1>
                                <p className="max-w-2xl text-3xl text-white">{t('capydev_explanation')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DeveloperAbout;