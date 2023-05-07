import { Link } from 'react-router-dom';
import { Requirement } from '../../../models/Requirement';
import { t } from 'i18next';

interface RequirementCardProps {
    requirement: Requirement;
}

function RequirementCard({ requirement }: RequirementCardProps){
    return (
        <div className="transition ease-in-out hover:scale-105 h-full hover:bg-indigo-500 duration-150 rounded-2xl max-w-md bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
        <Link to={"/admin/requirements/" + requirement.getId()} className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col items-center my-4 space-y-4 text-center">
                <img className="w-16" src={requirement.getImage()} alt='Requirement' />
                <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                    {requirement.getName()}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                    {t('points') + " " + requirement.getPoints()}
                </p>
            </div>
        </Link>
    </div>
    );
}

export default RequirementCard;