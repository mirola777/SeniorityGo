import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AdviceCard from '../../../components/common/AdviceCard';
import OrganizationUpdateForm from '../../../components/admin/organization/OrganizationUpdateForm';
import { Organization } from '../../../models/Organization';
import { useEffect } from 'react';

import { getOrganization } from '../../../services/OrganizationService';
import { getUserSession } from '../../../services/AuthService';


function UpdateOrganization() {
    // Translation component
    const { t } = useTranslation();
    const [organization, setOrganization] = useState<Organization | null>();

    function handleUpdateOrganization(organization: Organization) {
        setOrganization(organization);
    }

    useEffect(() => {
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
        <div>
            {organization && <div className='py-8 pr-8 mx-auto w-full space-y-8'>
                <div className='flex space-x-8'>
                    <div className='w-full flex flex-col rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                        <div className='flex items-center justify-center'>
                            <h2 className="text-3xl font-extrabold dark:text-white">{t('update_organization')}</h2>
                        </div>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <OrganizationUpdateForm organization={organization} onUpdateOrganization={handleUpdateOrganization} />
                    </div>

                    <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl'>
                        <AdviceCard message={t('organization_update_advice')} />
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default UpdateOrganization;