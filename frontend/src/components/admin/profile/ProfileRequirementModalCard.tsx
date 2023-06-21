import { useState } from 'react';
import { Requirement } from '../../../models/Requirement';
import { t } from 'i18next';

interface ProfileRequirementModalCardProps {
    onRequirementSelected: (requirement: Requirement) => void;
    requirement: Requirement;
    selectedRequirements: Requirement[];
}

function ProfileRequirementModalCard({ onRequirementSelected, requirement, selectedRequirements }: ProfileRequirementModalCardProps){
    const [isSelected, setIsSelected] = useState<boolean>(selectedRequirements.find((selectedRequirement) => selectedRequirement.getId() === requirement.getId()) !== undefined);
    const background = !isSelected ? "from-fuchsia-700 to-blue-600" : "from-green-700 to-green-600";

    function handleRequirementSelected(){
        setIsSelected(!isSelected);
        onRequirementSelected(requirement);
    }

    return (
        <div onClick={handleRequirementSelected} className={"transition ease-in-out h-full hover:bg-indigo-500 duration-150 rounded-2xl max-w-md bg-gradient-to-r p-0.5 shadow-2xl " + background}>
        <div className="h-full flex transition rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4 sm:p-6 lg:p-8">
            <div className="flex space-x-4 items-center justify-between w-full text-center">
                <img className="w-10" src={requirement.getImage()} alt='Requirement' />
                <h3 className="text-sm font-bold text-gray-200">
                    {requirement.getName()}
                </h3>
                <p className="text-xs text-gray-400">
                    {t('points') + " " + requirement.getPoints()}
                </p>
            </div>
        </div>
    </div>
    );
}

export default ProfileRequirementModalCard;