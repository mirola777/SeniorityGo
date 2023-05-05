import { Link } from 'react-router-dom';
import { Seniority } from '../../../models/Seniority';
import { ReactComponent as SeniorityIcon } from '../../../assests/icons/CodeBracket.svg';
import { t } from 'i18next';

interface SeniorityCardProps {
    seniority: Seniority;
}

function SeniorityCard({ seniority }: SeniorityCardProps) {
    return (
        <div className="h-full transition ease-in-out hover:scale-105 hover:bg-indigo-500 duration-150 rounded-2xl max-w-md bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
            <Link to={"/admin/seniorities/" + seniority.getId()} className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4 sm:p-6 lg:p-8">
                <div className="my-4 space-y-4 text-center">
                    <SeniorityIcon className="w-16 h-16 mx-auto text-gray-200" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                        {seniority.getName()}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                        {t('level') + " " + seniority.getLevel()}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default SeniorityCard;