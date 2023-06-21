import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AdviceCard from '../../../components/common/AdviceCard';
import { Profile } from '../../../models/Profile';
import ProfileForm from '../../../components/admin/profile/ProfileForm';
import CreatedProfiles from '../../../components/admin/profile/CreatedProfiles';



function CreateProfile() {
    // Translation component
    const { t } = useTranslation();
    const [createdProfiles, setCreatedProfiles] = useState<Profile[]>([]);

    function handleCreateProfile(profile: Profile) {
        setCreatedProfiles((prevProfiles) => [profile, ...prevProfiles]);
    }

    function handleDeleteProfile(profile: Profile) {
        setCreatedProfiles((prevProfiles) => prevProfiles.filter((prevProfile) => prevProfile.getId() !== profile.getId()));
    }

    return (
        <div className='py-8 pr-8 mx-auto w-full space-y-8'>
            <div className='flex space-x-8'>
                <div className='w-full flex flex-col rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center justify-center'>
                        <h2 className="text-3xl font-extrabold text-white">{t('create_profile')}</h2>
                    </div>
                    <hr className="h-px my-8  border-0 bg-gray-700" />
                    <ProfileForm onCreateProfile={handleCreateProfile} />
                </div>

                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl'>
                    <AdviceCard message={t('create_profile_advice')} />
                </div>
            </div>

            <div className='mx-auto w-full'>
                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center'>
                        <h2 className="text-3xl font-extrabold text-white">{t('recently_created_profiles')}</h2>
                    </div>
                    <hr className="h-px my-8  border-0 bg-gray-700" />
                    <CreatedProfiles profiles={createdProfiles} onDeleteProfile={handleDeleteProfile} />
                </div>
            </div>
        </div>
    );
}

export default CreateProfile;