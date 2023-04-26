import { useTranslation } from 'react-i18next';
import { Requirement } from '../../../models/Requirement';
import RequirementListItem from './RequirementListItem';


interface CreatedRequirementsProps {
    requirements: Requirement[];
    onDeleteRequirement: (requirement: Requirement) => void;
}


function CreatedRequirements({requirements, onDeleteRequirement}: CreatedRequirementsProps) {

    const { t } = useTranslation();


    return (
        <div>
            {requirements.length === 0 &&
                <div className='flex items-center text-center w-full'>
                    <h2 className="text-xl my-8 w-full font-extrabold text-gray-600">{t('no_requirements')}</h2>
                </div>
            }
            <ul className="space-y-4 w-full">
                {requirements.map((requirement) =>
                    <li>
                        <RequirementListItem requirement={requirement} onDeleteRequirement={onDeleteRequirement}></RequirementListItem>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default CreatedRequirements;