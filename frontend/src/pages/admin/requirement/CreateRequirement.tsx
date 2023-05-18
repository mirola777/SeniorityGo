import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CreatedRequirements from '../../../components/admin/requirement/CreatedRequirements';
import RequirementForm from '../../../components/admin/requirement/RequirementForm';
import AdviceCard from '../../../components/common/AdviceCard';
import { Requirement } from '../../../models/Requirement';



function CreateRequirement() {
    // Translation component
    const { t } = useTranslation();
    const [createdRequirements, setCreatedRequirements] = useState<Requirement[]>([]);

    function handleCreateRequirement(requirement: Requirement) {
        setCreatedRequirements((prevRequirements) => [requirement, ...prevRequirements]);
    }

    function handleDeleteRequirement(requirement: Requirement) {
        setCreatedRequirements((prevRequirements) => prevRequirements.filter((prevRequirement) => prevRequirement.getId() !== requirement.getId()));
    }

    return (
        <div className='py-8 pr-8 mx-auto w-full space-y-8'>
            <div className='flex space-x-8'>
                <div className='w-full flex flex-col rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center justify-center'>
                        <h2 className="text-3xl font-extrabold text-white">{t('create_requirement')}</h2>
                    </div>
                    <hr className="h-px my-8  border-0 bg-gray-700" />
                    <RequirementForm onCreateRequirement={handleCreateRequirement} />
                </div>

                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl'>
                    <AdviceCard message={t('create_requirement_advice')} />
                </div>
            </div>

            <div className='mx-auto w-full'>
                <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                    <div className='flex items-center'>
                        <h2 className="text-3xl font-extrabold text-white">{t('recently_created_requirements')}</h2>
                    </div>
                    <hr className="h-px my-8  border-0 bg-gray-700" />
                    <CreatedRequirements requirements={createdRequirements} onDeleteRequirement={handleDeleteRequirement} />
                </div>
            </div>
        </div>
    );
}

export default CreateRequirement;