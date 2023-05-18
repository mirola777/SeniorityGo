import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Requirement } from '../../../models/Requirement';
import { getRequirement } from '../../../services/RequirementService';
import { useParams, useNavigate } from 'react-router-dom';
import RequirementDeleteButton from '../../../components/admin/requirement/RequirementDeleteButton';
import RequirementUpdateForm from '../../../components/admin/requirement/RequirementUpdateForm';
import AdviceCard from '../../../components/common/AdviceCard';


function RequirementPage() {
    // Translation component
    const { t } = useTranslation();

    // Navigate
    const navigate = useNavigate();

    // Get the id from the URL params
    const { id = '' } = useParams<{ id: string }>();
    const idInt = parseInt(id, 10);

    const [requirement, setRequirement] = useState<Requirement | null>();

    function handleDeleteRequirement(requirement: Requirement) {
        navigate('/admin/requirements');
    }

    function handleUpdateRequirement(requirement: Requirement) {
        setRequirement(requirement);
    }

    useEffect(() => {
        getRequirement(idInt).then((requirementResponse) => {
            setRequirement(requirementResponse);
        });
    }, [idInt]);

    return (
        <div>
            {requirement && <div className='py-8 pr-8 mx-auto w-full space-y-8'>
                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center justify-between'>
                        <h2 className="text-3xl font-extrabold text-white">{requirement.getName()}</h2>
                        <RequirementDeleteButton requirement={requirement} onDeleteRequirement={handleDeleteRequirement} />
                    </div>
                </div>

                <div className='flex space-x-8'>
                    <div className=' rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                        <AdviceCard message={t('requirement_page')} />
                    </div>
                    <div className='w-full rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                        <h2 className="text-3xl font-extrabold  text-center text-white">{t('update_seniority')}</h2>
                        <hr className="h-px my-8 border-0 bg-gray-700" />
                        <RequirementUpdateForm requirement={requirement} onUpdateRequirement={handleUpdateRequirement} />
                    </div>
                </div>

            </div>}
        </div>
    );
}

export default RequirementPage;