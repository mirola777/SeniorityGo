import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CreatedSeniorities from '../../../components/admin/seniority/CreatedSeniorities';
import SeniorityForm from '../../../components/admin/seniority/SeniorityForm';
import AdviceCard from '../../../components/common/AdviceCard';
import { Seniority } from '../../../models/Seniority';
import OrganizationUpdateForm from '../../../components/admin/organization/OrganizationUpdateForm';
import { Organization } from '../../../models/Organization';
import { useEffect } from 'react';

import { getOrganization } from '../../../services/OrganizationService';


function UpdateOrganization() {
    // Translation component
    const { t } = useTranslation();
    const [organization, setOrganization] = useState<Organization | null>();

    function handleUpdateOrganization(organization: Organization) {
        setOrganization(organization);
    }

    useEffect(() => {
        getOrganization(1).then((organizationResponse) => {
            setOrganization(organizationResponse);
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