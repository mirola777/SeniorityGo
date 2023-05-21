import { useTranslation } from "react-i18next";
import { ReactComponent as AppLogo } from "../../assests/icons/AppLogo.svg";
import StepOne from "../../assests/images/HomeStepOne.jpg";
import StepTwo from "../../assests/images/HomeStepTwo.jpg";
import StepThree from "../../assests/images/HomeStepThree.jpg";
import StepFour from "../../assests/images/HomeStepFour.jpg";
import StepFive from "../../assests/images/HomeStepFive.jpg";
import StepSix from "../../assests/images/HomeStepSix.jpg";
import StepSeven from "../../assests/images/HomeStepSeven.jpg";

import HomeCard from "../../components/common/HomeCard";

function DeveloperHome() {
    const { t } = useTranslation();

    return (
        <div className="overflow-y-auto scrollbar-none  mx-auto flex flex-col items-center w-full h-full">
            <section className=" w-full bg-gradient-to-b from-transparent to-gray-900">
                <div className="max-w-screen-2xl w-full flex mx-auto p-4 lg:p-8">
                    <div className="mr-auto place-self-center space-y-4 lg:col-span-7">
                        <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">{t('have_your_ever_feel_stuck')}</h1>
                        <p className="max-w-2xl text-xl text-gray-400">{t('dont_you_know_how_to_advance')}</p>
                        <p className="max-w-2xl text-3xl text-white">{t('seniority_go_is_your_solution')}</p>
                        <p className="max-w-2xl text-xl text-gray-400">{t('seniority_go_explanation')}</p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <AppLogo className="w-96 h-96" />
                    </div>
                </div>
            </section>

            <section className="w-full p-4 lg:p-8 bg-gray-900 mx-auto">
                <div className="relative max-w-screen-xl w-full mx-auto">
                    <div
                        className="absolute lg:block hidden w-[4px] h-full transform -translate-x-1/2 rounded-2xl bg-blue-700 left-1/2">
                    </div>
                    <div className="space-y-0 lg:space-y-4">
                        <HomeCard text={t('home_step_one')} image={StepOne} index={1} />
                        <HomeCard text={t('home_step_two')} image={StepTwo} index={2} />
                        <HomeCard text={t('home_step_three')} image={StepThree} index={3} />
                        <HomeCard text={t('home_step_four')} image={StepFour} index={4} />
                        <HomeCard text={t('home_step_five')} image={StepFive} index={5} />
                        <HomeCard text={t('home_step_six')} image={StepSix} index={6} />
                        <HomeCard text={t('home_step_seven')} image={StepSeven} index={7} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DeveloperHome;