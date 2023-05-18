import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AdviceCard from '../../../components/common/AdviceCard';
import { getOrganization } from '../../../services/OrganizationService';
import { Organization } from '../../../models/Organization';
import StatsCard from '../../../components/common/StatsCard';
import { Link } from 'react-router-dom';
import { getUserSession } from '../../../services/AuthService';


function OrganizationPage() {
    // Translation component
    const { t } = useTranslation();

    const [organization, setOrganization] = useState<Organization | null>();

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
            {organization && <div className='py-8 pr-8 mx-auto w-full '>
                <div className='rounded-lg p-8 mb-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-4'>
                            <img className=" h-12 object-cover" src={organization.getImage()} alt="Logo" />
                            <h2 className="text-5xl font-extrabold text-white">{organization.getName()}</h2>
                        </div>

                        <Link to="update" className="inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                            <span
                                className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                {t('update_organization')}
                            </span>
                        </Link>
                    </div>
                </div>

                <div className='flex space-x-8'>

                    <div className='w-full max-w-2xl rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                        <h2 className="text-3xl font-extrabold  text-center text-white">{t('organization_stats')}</h2>
                        <hr className="h-px my-8 border-0 bg-gray-700" />
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <li>
                                <StatsCard label={t('stat_seniortiy_number')} number={3} />
                            </li>
                            <li>
                                <StatsCard label={t('stat_profile_number')} number={12} />
                            </li>
                            <li>
                                <StatsCard label={t('stat_user_number')} number={465} />
                            </li>
                        </ul>
                    </div>

                    <div className=' rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                        <AdviceCard message={t('organization_page')} />
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default OrganizationPage;