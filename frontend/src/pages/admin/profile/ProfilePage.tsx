import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import AdviceCard from '../../../components/common/AdviceCard';
import ProfileDeleteButton from '../../../components/admin/profile/ProfileDeleteButton';
import { Profile } from '../../../models/Profile';
import { getProfile } from '../../../services/ProfileService';
import ProfileUpdateForm from '../../../components/admin/profile/ProfileUpdateForm';


function ProfilePage() {
    // Translation component
    const { t } = useTranslation();

    // Navigate
    const navigate = useNavigate();

    // Get the id from the URL params
    const { id = '' } = useParams<{ id: string }>();
    const idInt = parseInt(id, 10);

    const [profile, setProfile] = useState<Profile | null>();

    function handleDeleteProfile(profile: Profile) {
        navigate('/admin/profiles');
    }

    function handleUpdateProfile(profile: Profile) {
        setProfile(profile);
    }

    useEffect(() => {
        getProfile(idInt).then((profile) => {
            setProfile(profile);
        });
    }, [idInt]);

    return (
        <div>
            {profile && <div className='py-8 pr-8 mx-auto w-full space-y-8'>
                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center justify-between'>
                        <h2 className="text-3xl font-extrabold text-white">{profile.getName()}</h2>
                        <ProfileDeleteButton profile={profile} onDeleteProfile={handleDeleteProfile} />
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div className=' rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                        <AdviceCard message={t('profile_page')} />
                    </div>
                    <div className='w-full rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                        <h2 className="text-3xl font-extrabold  text-center text-white">{t('update_profile')}</h2>
                        <hr className="h-px my-8 border-0 bg-gray-700" />
                        <ProfileUpdateForm profile={profile} onUpdateProfile={handleUpdateProfile} />
                    </div>
                </div>

            </div>}
        </div>
    );
}

export default ProfilePage;