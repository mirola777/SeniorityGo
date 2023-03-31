import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SeniorityCard from '../../components/common/SeniorityCard';
import { Seniority } from '../../models/Seniority';
import { getAllSeniorities } from '../../services/SeniorityService';
import { Link } from 'react-router-dom';

function Seniorities() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [seniorities, setSeniorities] = useState<Seniority[]>([]);

    useEffect(() => {
        getAllSeniorities().then((senioritiesResponse) => {
            setSeniorities(senioritiesResponse);
        });
    });

    return (
        <div className='py-8 pr-8 mx-auto w-full '>
            <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-5xl font-extrabold dark:text-white">{t('seniorities')}</h2>
                    <Link to="create" className="inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                        <span
                            className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                            {t('create_seniority')}
                        </span>
                    </Link>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {seniorities.map((seniority) =>
                        <li>
                            <SeniorityCard seniority={seniority}></SeniorityCard>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Seniorities;