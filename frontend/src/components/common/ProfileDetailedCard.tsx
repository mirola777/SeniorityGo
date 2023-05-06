import { t } from 'i18next';
import { Profile } from '../../models/Profile';
import ProfileSeniorityCard from './ProfileSeniorityCard';

interface ProfileDetailedCardProps {
    profile: Profile;
}

function ProfileDetailedCard({ profile }: ProfileDetailedCardProps) {
    return (
        <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 h-full shadow-2xl'>
            <div className="container text-white space-y-8">
                <section className="text-center  w-full">
                    <h2 className="text-4xl font-bold mb-2">
                        {profile.getName()}
                    </h2>

                    <p className="text-gray-400">
                        {profile.getDescription()}
                    </p>
                </section>

                <hr className="h-px bg-gradient-to-r from-fuchsia-700 to-blue-600 border-0" />

                <section className="flex-wrap items-center space-y-4">
                    <h2 className="text-2xl text-center font-bold mb-2">
                        {t('seniorities')}
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        {profile.getProfilesSeniorities().map((profileseniority) => {
                            return (<ProfileSeniorityCard profileseniority={profileseniority} />);
                        })}
                    </div>

                </section>

                <hr className="h-px bg-gradient-to-r from-fuchsia-700 to-blue-600 border-0" />

                <section className='flex items-center mt-8 justify-between'>
                    <h2 className="text-sm font-extrabold text-gray-400">{t('do_you_want_know_more')}</h2>

                    <button className="inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                        <span
                            className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                            {t('more_info')}
                        </span>
                    </button>
                </section>
            </div>
        </div>
    );
}

export default ProfileDetailedCard;