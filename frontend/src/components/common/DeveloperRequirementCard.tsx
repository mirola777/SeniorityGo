import { DeveloperRequirement } from '../../models/DeveloperRequirements';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ValidateRequirementModal from './ValidateRequirementModal';

interface DeveloperRequirementCardProps {
    developerrequirement: DeveloperRequirement;
}

function DeveloperRequirementCard({ developerrequirement }: DeveloperRequirementCardProps) {
    const { t } = useTranslation();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const requirement = developerrequirement.getRequirement();
    const isCompleted = developerrequirement.getIsCompleted();
    const cardColor = isCompleted ? "hover:bg-green-500 from-cyan-700 to-green-600" : "hover:bg-indigo-500 from-fuchsia-700 to-blue-600";

    return (
        <div className={"transition ease-in-out h-full  duration-150 rounded-2xl max-w-md bg-gradient-to-r p-0.5 shadow-2xl " + cardColor}>
            {modalIsOpen && <ValidateRequirementModal requirement={requirement} closeModal={closeModal} />}
            <div className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4 ">
                <div className="flex flex-col items-center my-4 space-y-4 text-center">
                    {isCompleted ? (
                        <span className="inline-flex items-center bg-green-900 text-green-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                            <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                            {t('completed')}
                        </span>
                    ) : (
                        <span className="inline-flex items-center bg-cyan-900 text-cyan-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                            <span className="w-2 h-2 mr-1 bg-cyan-500 rounded-full"></span>
                            {t('not_completed')}
                        </span>
                    )}
                    <img className="w-16" src={requirement.getImage()} alt='Requirement' />
                    <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                        {requirement.getName()}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                        {t('points') + " " + requirement.getPoints()}
                    </p>

                    {!isCompleted && (
                        <button onClick={openModal} className="inline-block rounded-full bg-gradient-to-r from-cyan-700 to-green-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                            <span
                                className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                {t('validate')}
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DeveloperRequirementCard;