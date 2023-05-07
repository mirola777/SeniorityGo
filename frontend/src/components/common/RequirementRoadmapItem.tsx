import { t } from 'i18next';
import { Requirement } from '../../models/Requirement';

interface RequirementRoadmapItemProps {
    requirement: Requirement;
    index: number;
}

function RequirementRoadmapItem({ requirement, index }: RequirementRoadmapItemProps) {

    return (
        <div className="flex items-center">
            {index % 2 !== 0 ? (
                <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                        <div className="relative flex-1 mb-16  lg:mb-8 flex flex-col bg-white items-center justify-center h-full transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-0.5 shadow-2xl">
                            <div className="h-full flex w-full flex-col text-center space-y-8  transition items-center rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4">
                                <div className="flex flex-col items-center p-6 space-y-4">
                                    <img className="w-24" src={requirement.getImage()} alt="Requirement" />
                                    <p className="mt-4 mb-2 text-2xl font-bold text-white">{requirement.getName()}</p>
                                    <p className="text-gray-400">{requirement.getDescription()}</p>
                                    <p className="text-2xl text-white">{requirement.getPoints() + " " + t('points')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                        <div className="relative flex-1 mb-16  lg:mb-8 flex flex-col bg-white items-center justify-center h-full transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-0.5 shadow-2xl">
                            <div className="h-full flex w-full flex-col text-center space-y-8  transition items-center rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4">
                                <div className="flex flex-col items-center p-6 space-y-4">
                                    <img className="w-24" src={requirement.getImage()} alt="Requirement" />
                                    <p className="mt-4 mb-2 text-2xl font-bold text-white">{requirement.getName()}</p>
                                    <p className="text-gray-400">{requirement.getDescription()}</p>
                                    <p className="text-2xl text-white">{requirement.getPoints() + " " + t('points')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div
                className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-dark-blue-300 border-4 border-blue-700 rounded-full left-1/2 sm:translate-y-0">
                <span className="text-blue-600 dark:text-gray-400">

                </span>
            </div>
        </div>
    );
}

export default RequirementRoadmapItem;