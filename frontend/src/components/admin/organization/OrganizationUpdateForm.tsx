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
        image: null
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
        else if (type === 'file')
            setOrganizationDict({ ...organizationDict, [name]: value });
    };

    return (
        <form className='w-full max-w-lg mx-auto space-y-4 flex flex-col' onSubmit={handleSubmit} >
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
                <DropzoneImage onChange={handleInputChange} />
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