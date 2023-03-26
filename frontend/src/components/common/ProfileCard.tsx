import { useTranslation } from 'react-i18next';
import { Profile } from '../../models/Profile';

interface ProfileCardProps {
    profile: Profile;
}

function ProfileCard({ profile }: ProfileCardProps) {
    // Translation component
    const { t } = useTranslation();

    return (
        <div className="transition ease-in-out  hover:scale-105 hover:bg-indigo-500 duration-150 rounded-2xl max-w-md bg-gradient-to-r from-[#283c86] to-[#45a247] p-1 shadow-xl">
            <a className="transition block rounded-xl hover:bg-gray-800/80 duration-150 bg-gray-800 p-4 sm:p-6 lg:p-8" href="#">
                <div className="mt-16">
                    <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                        {profile.getName()}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                        {profile.getDescription()}
                    </p>
                </div>
            </a>
        </div>
    );
}

export default ProfileCard;