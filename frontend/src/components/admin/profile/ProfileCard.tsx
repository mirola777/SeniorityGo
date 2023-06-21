import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { Profile } from '../../../models/Profile';

interface AdminProfileCardProps {
    profile: Profile;
}

function AdminProfileCard({ profile }: AdminProfileCardProps){
    return (
        <div className="transition ease-in-out hover:scale-105 h-full hover:bg-indigo-500 duration-150 rounded-2xl max-w-md bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
        <Link to={"/admin/profiles/" + profile.getId()} className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col items-center my-4 space-y-4 text-center">
                <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                    {profile.getName()}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                    {t('points') + " " + profile.getDescription()}
                </p>
            </div>
        </Link>
    </div>
    );
}

export default AdminProfileCard;