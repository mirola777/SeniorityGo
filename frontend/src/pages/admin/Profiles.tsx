import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileCard from '../../components/common/ProfileCard';
import { Profile } from '../../models/Profile';
import { getAllProfiles } from '../../services/ProfileService';

function Profiles() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        getAllProfiles().then((profilesResponse) => {
            setProfiles(profilesResponse);
        });
    });

    return (
        <div className='p-8 mx-auto max-w-7xl space-y-8'>
            <h2 className="text-5xl font-extrabold dark:text-white">Profiles</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {profiles.map((profile) =>
                    <li>
                        <ProfileCard profile={profile}></ProfileCard>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Profiles;