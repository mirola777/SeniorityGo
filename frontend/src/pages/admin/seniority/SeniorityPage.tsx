import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Seniority } from '../../../models/Seniority';
import { getSeniority } from '../../../services/SeniorityService';
import { useParams, useNavigate } from 'react-router-dom';
import SeniorityDeleteButton from '../../../components/admin/seniority/SeniorityDeleteButton';
import SeniorityUpdateForm from '../../../components/admin/seniority/SeniorityUpdateForm';
import AdviceCard from '../../../components/common/AdviceCard';



function SeniorityPage() {
    // Translation component
    const { t } = useTranslation();

    // Navigate
    const navigate = useNavigate();

    // Get the id from the URL params
    const { id = '' } = useParams<{ id: string }>();
    const idInt = parseInt(id, 10);

    // Seniority var
    const [seniority, setSenioriy] = useState<Seniority | null>();

    function handleDeleteSeniority(seniority: Seniority) {
        navigate('/admin/seniorities');
    }

    function handleUpdateSeniority(seniority: Seniority) {
        setSenioriy(seniority);
    }

    useEffect(() => {
        getSeniority(idInt).then((seniorityResponse) => {
            setSenioriy(seniorityResponse);
        });
    }, [idInt]);

    return (
        <div>
            {seniority && <div className='py-8 pr-8 mx-auto w-full space-y-8'>
                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center justify-between'>
                        <h2 className="text-3xl font-extrabold text-white">{seniority.getName() + " (Level " + seniority.getLevel() + ")"}</h2>
                        <SeniorityDeleteButton seniority={seniority} onDeleteSeniority={handleDeleteSeniority} />
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div className=' rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                        <AdviceCard message={t('seniority_page')} />
                    </div>
                    <div className='w-full rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                        <h2 className="text-3xl font-extrabold  text-center text-white">{t('update_seniority')}</h2>
                        <hr className="h-px my-8 border-0 bg-gray-700" />
                        <SeniorityUpdateForm seniority={seniority} onUpdateSeniority={handleUpdateSeniority} />
                    </div>
                </div>

            </div>}
        </div>
    );
}

export default SeniorityPage;