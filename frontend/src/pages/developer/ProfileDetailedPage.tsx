import { useParams } from 'react-router-dom';
import { addDeveloperToProfile, getProfile } from '../../services/ProfileService';
import { useEffect, useState } from 'react';
import { Profile } from '../../models/Profile';
import ProfileSeniorityRoadmapItem from '../../components/common/profile/ProfileSeniorityRoadmapItem';
import { getUserSession } from '../../services/AuthService';
import { Admin } from '../../models/Admin';
import { Developer } from '../../models/Developer';
import { useTranslation } from 'react-i18next';
import LoadingScreen from '../../components/common/LoadingScreen';

function ProfileDetailedPage() {
    const { t } = useTranslation();

    // Profile 
    const [profile, setProfile] = useState<Profile | null>(null);

    // User
    const [user, setUser] = useState<Admin | Developer | null>(null);

    // Is the user in the profile
    const [isUserInProfile, setIsUserInProfile] = useState<boolean>(true);

    // Is loading
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Get the id from the URL params
    const { id = '' } = useParams<{ id: string }>();
    const idInt = parseInt(id, 10);

    const handleJoinProfile = () => {
        if (user instanceof Developer) {
            setIsLoading(true);
            addDeveloperToProfile(idInt).then(() => {
                setIsUserInProfile(true);
                setIsLoading(false);
            }).catch(() => {
                setIsLoading(false);
            });
        }
    }

    useEffect(() => {
        getUserSession().then((user) => {
            setUser(user);
            if (user instanceof Developer) {
                setIsUserInProfile(user.getDeveloperProfiles().some((profile) => profile.getProfile().getId() === idInt))
            }
        });

        getProfile(idInt).then((profile) => {
            setProfile(profile);
            setIsLoading(false);
        }
        )
    }, [idInt]);


    return (
        <div className='p-4 lg:p-8 mx-auto max-w-screen-2xl w-full overflow-y-auto scrollbar-none'>
            <div className='lg:space-y-8 '>
                <div className='flex flex-col my-14 lg:my-40 items-center text-center justify-between space-y-8'>
                    <h2 className="text-4xl lg:text-7xl text-white">{profile?.getName()}</h2>
                    <h2 className="text-base lg:text-xl max-w-3xl text-gray-400">{profile?.getDescription()}</h2>
                    {user instanceof Developer && !isUserInProfile && (
                        <div className='pt-4 lg:pt-20 space-y-8'>
                            <h2 className="text-xl lg:text-4xl max-w-3xl text-gray-200">{t('profile_join')}</h2>
                            <button onClick={handleJoinProfile}
                                className="inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                                <span
                                    className="block rounded-full bg-dark-blue-800/60 px-20 lg:px-48 py-4 text-lg lg:text-2xl font-medium hover:bg-dark-blue-800/40">
                                    {t('profile_join_button')}
                                </span>
                            </button>
                        </div>
                    )}
                </div>

                <section>
                    {profile?.getProfilesSeniorities().map((profileseniority) => (
                        <ProfileSeniorityRoadmapItem developer={user instanceof Developer ? user : undefined} profileseniority={profileseniority} />
                    ))}
                </section>
            </div >
            {isLoading && (<LoadingScreen />)}
        </div >
    );
}

export default ProfileDetailedPage;