import { useTranslation } from 'react-i18next';
import { Profile } from '../../../models/Profile';
import ProfileListItem from './ProfileListItem';


interface CreatedProfilesProps {
    profiles: Profile[];
    onDeleteProfile: (profile: Profile) => void;
}


function CreatedProfiles({profiles, onDeleteProfile}: CreatedProfilesProps) {

    const { t } = useTranslation();


    return (
        <div>
            {profiles.length === 0 &&
                <div className='flex items-center text-center w-full'>
                    <h2 className="text-xl my-8 w-full font-extrabold text-gray-600">{t('no_profiles')}</h2>
                </div>
            }
            <ul className="space-y-4 w-full">
                {profiles.map((profile) =>
                    <li>
                        <ProfileListItem profile={profile} onDeleteProfile={onDeleteProfile}></ProfileListItem>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default CreatedProfiles;