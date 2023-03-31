import { useTranslation } from 'react-i18next';
import SeniorityForm from '../../components/admin/SeniorityForm';

function CreateSeniorty() {
    // Translation component
    const { t } = useTranslation();

    return (
        <div className='py-8 pr-8 mx-auto w-full '>
            <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-5xl font-extrabold dark:text-white">{t('create_seniority')}</h2>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <SeniorityForm />
            </div>
        </div>
    );
}

export default CreateSeniorty;