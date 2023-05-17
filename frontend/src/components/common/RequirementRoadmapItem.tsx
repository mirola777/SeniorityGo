import { t } from 'i18next';
import { Requirement } from '../../models/Requirement';
import { Developer } from '../../models/Developer';
import { ReactComponent as CheckIcon } from '../../assests/icons/CheckCircle.svg';

interface RequirementRoadmapItemProps {
    requirement: Requirement;
    index: number;
    developer?: Developer;
}

function RequirementRoadmapItem({ requirement, index, developer }: RequirementRoadmapItemProps) {

    const isCompleted = developer?.getDeveloperRequirements().find((developerrequirement) => developerrequirement.getRequirement().getId() === requirement.getId())?.getIsCompleted();
    const cardColor = isCompleted ? "hover:bg-green-500 from-cyan-700 to-green-600" : "hover:bg-indigo-500 from-fuchsia-700 to-blue-600";

    return (
        <div className="flex items-center">
            {index % 2 !== 0 ? (
                <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                        <div className={"relative flex-1 mb-16  lg:mb-8 flex flex-col items-center justify-center h-full transition ease-in-out duration-150 rounded-2xl bg-gradient-to-r p-0.5 shadow-2xl " + cardColor}>
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
                        <div className={"relative flex-1 mb-16  lg:mb-8 flex flex-col items-center justify-center h-full transition ease-in-out duration-150 rounded-2xl bg-gradient-to-r p-0.5 shadow-2xl " + cardColor}>
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
            {isCompleted ? (
                <div
                    className="absolute hidden lg:flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-700  rounded-full left-1/2 sm:translate-y-0">
                        <CheckIcon className="text-white w-full h-full" />
                </div>
            ) : (
                <div
                    className="absolute  hidden lg:flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-dark-blue-300 border-4 border-blue-700 rounded-full left-1/2 sm:translate-y-0">
                </div>
            )}

        </div>
    );
}

export default RequirementRoadmapItem;