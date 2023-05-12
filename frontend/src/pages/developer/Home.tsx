import { useTranslation } from "react-i18next";
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg";

function DeveloperHome() {
    const { t } = useTranslation();

    return (
        <div className="overflow-y-auto scrollbar-none  mx-auto flex flex-col items-center w-full h-full">
            <section className=" w-full bg-gradient-to-b from-transparent to-gray-900">
                <div className="max-w-screen-2xl w-full flex mx-auto px-8 py-32 ">
                    <div className="mr-auto place-self-center space-y-4 lg:col-span-7">
                        <h1 className="max-w-2xl  text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{t('have_your_ever_feel_stuck')}</h1>
                        <p className="max-w-2xl text-xl text-gray-400">{t('dont_you_know_how_to_advance')}</p>
                        <p className="max-w-2xl text-3xl text-white">{t('seniority_go_is_your_solution')}</p>
     
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <AppLogo className="w-96 h-96"/>
                    </div>
                </div>
            </section>
            <section className="w-full bg-gray-900">
                <div className="max-w-screen-2xl w-full flex mx-auto px-8 py-32">
                    <h1 className=" text-4xl text-center tracking-tight leading-none dark:text-white">{t('seniority_go_explanation')}</h1>
                </div>
                
            </section>
        </div>
    );
}

export default DeveloperHome;