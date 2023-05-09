import { t } from 'i18next';
import { Requirement } from '../../models/Requirement';

interface UserRequirementCardProps {
    requirement: Requirement;
}

function UserRequirementCard({ requirement }: UserRequirementCardProps){
    return (
        <div className="transition ease-in-out h-full hover:bg-indigo-500 duration-150 rounded-2xl max-w-md bg-gradient-to-r from-fuchsia-700 to-blue-600 p-0.5 shadow-2xl">
        <div className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4 ">
            <div className="flex flex-col items-center my-4 space-y-4 text-center">
                <img className="w-16" src={requirement.getImage()} alt='Requirement' />
                <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                    {requirement.getName()}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                    {t('points') + " " + requirement.getPoints()}
                </p>
            </div>
        </div>
    </div>
    );
}

export default UserRequirementCard;