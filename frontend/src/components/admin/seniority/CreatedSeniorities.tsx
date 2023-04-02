import { useTranslation } from 'react-i18next';
import { Seniority } from '../../../models/Seniority';
import SeniorityListItem from './SeniorityListItem';


interface CreatedSenioritiesProps {
    seniorities: Seniority[];
    onDeleteSeniority: (seniority: Seniority) => void;
}


function CreatedSeniorities({ seniorities, onDeleteSeniority }: CreatedSenioritiesProps) {
    // Translation component
    const { t } = useTranslation();

    return (
        <div>
            {seniorities.length === 0 &&
                <div className='flex items-center text-center w-full'>
                    <h2 className="text-xl my-8 w-full font-extrabold text-gray-600">{t('no_seniorities')}</h2>
                </div>
            }
            <ul className="space-y-4 w-full">
                {seniorities.map((seniority) =>
                    <li>
                        <SeniorityListItem seniority={seniority} onDeleteSeniority={onDeleteSeniority}></SeniorityListItem>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default CreatedSeniorities;