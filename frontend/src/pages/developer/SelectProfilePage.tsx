import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Profile } from '../../models/Profile';
import { getOrganizationProfilesDetailed } from '../../services/ProfileService';
import ProfileDetailedCard from '../../components/common/profile/ProfileDetailedCard';
import { Organization } from '../../models/Organization';
import { getOrganization } from '../../services/OrganizationService';
import { getUserSession } from '../../services/AuthService';
import LoadingScreen from '../../components/common/LoadingScreen';
import { Developer } from '../../models/Developer';
import { Admin } from '../../models/Admin';


function SelectProfilePage() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [profiles, setProfiles] = useState<Profile[]>([]);
    // Organization var
    const [organization, setOrganization] = useState<Organization | null>(null);
    // User var
    const [user, setUser] = useState<Developer | Admin | null>(null);

    useEffect(() => {
        getOrganizationProfilesDetailed().then((profilesResponse) => {
            setProfiles(profilesResponse);
        });

        getUserSession().then((user) => {
            if (user?.getUser() === null || user?.getUser() === undefined) {
                return;
            }

            setUser(user);

            getOrganization(user.getUser().getOrganization()).then((organizationResponse) => {
                setOrganization(organizationResponse);
            });
        });
    }, []);

    return (
        <div className='p-8 mx-auto w-full items-center max-w-4xl overflow-y-auto scrollbar-none space-y-8'>
            <div className="flex items-center justify-between">
                <h2 className="text-5xl font-extrabold text-white">{t('profiles')}</h2>
                {organization && (<img className=" h-24" src={organization.getImage()} alt="Organization logo" />)}
            </div>

            <h3 className="text-xl font-extrabold text-gray-400">{t('select_profile_description')}</h3>

            {profiles.length > 0 ? (
                <ul className="grid grid-cols-1 gap-4">
                    {profiles.map((profile) =>
                        <li>
                            <ProfileDetailedCard developer={user instanceof Developer ? user : undefined}  profile={profile}></ProfileDetailedCard>
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