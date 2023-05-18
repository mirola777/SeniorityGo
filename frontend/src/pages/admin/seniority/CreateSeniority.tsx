import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CreatedSeniorities from '../../../components/admin/seniority/CreatedSeniorities';
import SeniorityForm from '../../../components/admin/seniority/SeniorityForm';
import AdviceCard from '../../../components/common/AdviceCard';
import { Seniority } from '../../../models/Seniority';


function CreateSeniorty() {
    // Translation component
    const { t } = useTranslation();
    const [createdSeniorities, setCreatedSeniorities] = useState<Seniority[]>([]);

    function handleCreateSeniority(seniority: Seniority) {
        setCreatedSeniorities((prevSeniorities) => [seniority, ...prevSeniorities]);
    }

    function handleDeleteSeniority(seniority: Seniority) {
        setCreatedSeniorities((prevSeniorities) => prevSeniorities.filter((prevSeniority) => prevSeniority.getId() !== seniority.getId()));
    }

    return (
        <div className='py-8 pr-8 mx-auto w-full space-y-8'>
            <div className='flex space-x-8'>
                <div className='w-full flex flex-col rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center justify-center'>
                        <h2 className="text-3xl font-extrabold text-white">{t('create_seniority')}</h2>
                    </div>
                    <hr className="h-px my-8  border-0 bg-gray-700" />
                    <SeniorityForm onCreateSeniority={handleCreateSeniority} />
                </div>

                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl'>
                    <AdviceCard message={t('create_seniority_advice')} />
                </div>
            </div>

            <div className='mx-auto w-full'>
                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center'>
                        <h2 className="text-3xl font-extrabold dark:text-white">{t('recently_created_seniorities')}</h2>
                    </div>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    <CreatedSeniorities seniorities={createdSeniorities} onDeleteSeniority={handleDeleteSeniority} />
                </div>
            </div>
        </div>
    );
}

export default CreateSeniorty;