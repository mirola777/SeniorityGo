import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAllOrganizationsDetailed } from '../../services/OrganizationService';
import { Organization } from '../../models/Organization';
import OrganizationCard from '../../components/common/OrganizationCard';

function Organizations() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    useEffect(() => {
        getAllOrganizationsDetailed().then((organizationsResponse) => {
            console.log(organizationsResponse);
            setOrganizations(organizationsResponse);
        });
    }, []);

    return (
        <div className='p-8 mx-auto w-full overflow-y-auto scrollbar-none'>
            <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-5xl font-extrabold dark:text-white">{t('organizations')}</h2>

                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {organizations.map((organization) =>
                        <li>
                            <OrganizationCard organization={organization}></OrganizationCard>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Organizations;