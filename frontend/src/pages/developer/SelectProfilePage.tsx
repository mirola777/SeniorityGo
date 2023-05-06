import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Profile } from '../../models/Profile';
import { getOrganizationProfilesDetailed } from '../../services/ProfileService';
import ProfileDetailedCard from '../../components/common/ProfileDetailedCard';
import { Organization } from '../../models/Organization';
import { getOrganization } from '../../services/OrganizationService';
import { getUserSession } from '../../services/AuthService';
import LoadingScreen from '../../components/common/LoadingScreen';


function SelectProfilePage() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [profiles, setProfiles] = useState<Profile[]>([]);
    // Organization var
    const [organization, setOrganization] = useState<Organization | null>(null);

    useEffect(() => {
        getOrganizationProfilesDetailed().then((profilesResponse) => {
            console.log(profilesResponse);
            setProfiles(profilesResponse);
        });

        getUserSession().then((user) => {
            if (user?.getUser() === null || user?.getUser() === undefined) {
                return;
            }

            getOrganization(user.getUser().getOrganization()).then((organizationResponse) => {
                setOrganization(organizationResponse);
            });
        });
    }, []);

    return (
        <div className='p-8 mx-auto max-w-4xl w-full items-center overflow-y-auto scrollbar-none space-y-8'>
            <h2 className="text-5xl font-extrabold text-white">{t('profiles')}</h2>
            <h3 className="text-xl font-extrabold text-gray-400">{t('select_profile_description')}</h3>

            {profiles.length > 0 ? (
                <ul className="space-y-8">
                    {profiles.map((profile) =>
                        <li>
                            <ProfileDetailedCard profile={profile}></ProfileDetailedCard>
                        </li>
                    )}
                </ul>
            ) : (
                <LoadingScreen />
            )}


        </div>
    );
}

export default SelectProfilePage;