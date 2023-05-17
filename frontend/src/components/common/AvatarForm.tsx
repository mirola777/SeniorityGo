import { useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FormOutputMessage from '../common/FormOutputMessage';
import DropzoneImage from '../common/DropzoneImage';
import { Link } from 'react-router-dom';
import { updateDeveloperAvatar } from '../../services/DeveloperService';
import LoadingScreen from './LoadingScreen';


function AvatarForm() {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState<string | null>(null);
    const [requirementDict, setRequirementDict] = useState({
        avatar: '',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        updateDeveloperAvatar(requirementDict).then(() => {
            setIsLoading(false);
            setSuccess(t('avatar_updated'));
            setErrors([]);
        }).catch((error) => {
            setIsLoading(false);
            setSuccess(null);
            setErrors([]);
            setErrors((prevErrors) => {
                const newErrors = error['errors'].map((error: string) => t(error));
                return [...prevErrors, ...newErrors];
            });

        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;

        if (type === 'file') setRequirementDict({ ...requirementDict, [name]: value });
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto md:h-full">
            <div className="w-full rounded-lg border px-6 py-2 md:mt-0 sm:max-w-md  bg-gradient-to-r border-b border-blue-800 from-gray-800 to-dark-blue-800 shadow-2xl">
                <form className='w-full mx-auto space-y-4 flex flex-col' onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="avatar" className="block my-8 text-3xl text-center font-medium text-white">{t('select_avatar')}</label>
                        <DropzoneImage id='avatar' onChange={handleInputChange} />
                    </div>

                    <div className="flex justify-between">
                        <button type="submit"
                            className="inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                            <span
                                className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                {t('update_avatar')}
                            </span>
                        </button>

                        <Link to="/" className="inline-block rounded-full bg-gradient-to-r from-red-700 to-red-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                            <span
                                className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                {t('skip')}
                            </span>
                        </Link>
                    </div>

                    <FormOutputMessage errors={errors} success={success} />
                </form>
            </div>
            {isLoading && <LoadingScreen />}
        </div>
    );
}

export default AvatarForm;