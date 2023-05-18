import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllOrganizationsDetailed } from '../../services/OrganizationService';
import { Organization } from '../../models/Organization';
import OrganizationCard from '../../components/common/OrganizationCard';
import LoadingScreen from '../../components/common/LoadingScreen';

function Organizations() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    useEffect(() => {
        getAllOrganizationsDetailed().then((organizationsResponse) => {
            setOrganizations(organizationsResponse);
        });
    }, []);

    return (
        <div className='p-4 lg:p-8 mx-auto max-w-screen-2xl w-full overflow-y-auto scrollbar-none'>
            <div className='rounded-lg p-4 lg:p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-4 lg:space-y-8'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-2xl lg:text-5xl font-extrabold text-white">{t('organizations')}</h2>
                </div>

                <hr className="h-px my-8 border-0 bg-gray-700" />

                <ul className="grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-8">
                    {organizations.length > 0 ? (organizations.map((organization) =>
                        <li>
                            <OrganizationCard organization={organization}></OrganizationCard>
                        </li>
                    )) : (<LoadingScreen />)}
                </ul>
            </div>
        </div>
    );
}

export default Organizations;