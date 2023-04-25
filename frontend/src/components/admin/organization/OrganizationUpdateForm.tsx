import { useState, useCallback } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as NameIcon } from '../../../assests/icons/CodeBracket.svg';
import FormOutputMessage from '../../common/FormOutputMessage';
import { Organization } from '../../../models/Organization';
import { updateOrganization } from '../../../services/OrganizationService';
import { useDropzone } from 'react-dropzone';
import DropzoneImage from '../../common/DropzoneImage';


interface OrganizationUpdateFormProps {
    organization: Organization;
    onUpdateOrganization: (organization: Organization) => void;
}


function OrganizationUpdateForm({ organization, onUpdateOrganization }: OrganizationUpdateFormProps) {
    // Translation component
    const { t } = useTranslation();


    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState<string | null>(null);
    const [organizationDict, setOrganizationDict] = useState({
        id: organization.getId(),
        name: organization.getName(),
        image: organization.getImage()
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        updateOrganization(organization.getId(), organizationDict).then((organizationResponse) => {

            onUpdateOrganization(organizationResponse);
            setSuccess(t('organization_updated'));
            setErrors([]);
        }).catch((error) => {

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

        if (type === 'number')
            setOrganizationDict({ ...organizationDict, [name]: parseInt(value) });
        else if (type === 'text')
            setOrganizationDict({ ...organizationDict, [name]: value });
    };

    return (
        <form className='w-full max-w-lg mx-auto space-y-4 flex flex-col' onSubmit={handleSubmit}>
            <div className='space-y-4'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <NameIcon className="w-5 h-5 text-gray-400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        value={organizationDict.name}
                        className="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="SoftServe, Globant, Meta..." />
                </div>

                <label htmlFor="image" className="block mb-2 text-sm font-medium text-white">Logo</label>
                <DropzoneImage />
                <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-400">{t('click_or_drop_image')}</p>
                                <p className="text-xs text-gray-400">{t('click_or_drop_image_types')}</p>
                            </div>
                            <input id="image" name='image' type="file" accept=".jpg, .jpeg, .png" className="hidden" />
                        </label>
                    </div>
            </div>

            <button type="submit"
                className="mx-auto inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                <span
                    className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                    {t('update_organization')}
                </span>
            </button>
            <FormOutputMessage errors={errors} success={success} />
        </form>
    );
}

export default OrganizationUpdateForm;