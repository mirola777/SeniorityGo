import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
        <div>
            <h1>{t('welcome')}</h1>
            <ul>
                {profiles.map((profile) =>
                    <li>
                        <h1>{profile.getId()}</h1>
                        <h1>{profile.getName()}</h1>
                        <h1>{profile.getDescription()}</h1>
                        <hr />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Profiles;