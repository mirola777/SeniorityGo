import { useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { createRequirement } from '../../../services/RequirementService';
import { ReactComponent as RequirementsIcon } from "../../../assests/icons/Req.svg";
import { ReactComponent as PointsIcon } from "../../../assests/icons/Points.svg";
import { Requirement } from '../../../models/Requirement';
import FormOutputMessage from '../../common/FormOutputMessage';
import DropzoneImage from '../../common/DropzoneImage';


interface RequirementFormProps {
    onCreateRequirement: (requirement: Requirement) => void;
}


function RequirementForm({ onCreateRequirement }: RequirementFormProps) {
    const { t } = useTranslation();

    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState<string | null>(null);
    const [, setCreatedRequirement] = useState<Requirement | null>(null);
    const [requirementDict, setRequirementDict] = useState({
        name: '',
        description: '',
        image: '',
        points: 0,
        organization: 1
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createRequirement(requirementDict).then((requirementResponse) => {

            setSuccess(t('requirement_created'));
            onCreateRequirement(requirementResponse);
            setCreatedRequirement(requirementResponse);
            setErrors([]);
        }).catch((error) => {

            setSuccess(null);
            setCreatedRequirement(null);
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
            setRequirementDict({ ...requirementDict, [name]: parseInt(value) });
        else if (type === 'text' || type === 'file')
            setRequirementDict({ ...requirementDict, [name]: value });
    };

    return (
        <form className='w-full max-w-lg mx-auto space-y-4 flex flex-col' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <RequirementsIcon className="w-5 h-5 text-gray-400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        required
                        className="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Git certificate..." />
                </div>
            </div>

            <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <RequirementsIcon className="w-5 h-5 text-gray-400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </div>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        onChange={handleInputChange}
                        required
                        className="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Important aspects..." />
                </div>
            </div>

            <div>
                <label htmlFor="image" className="block mb-2 text-sm font-medium text-white">Image</label>
                <DropzoneImage onChange={handleInputChange} />
                <label htmlFor="image" className="block mb-2 text-sm font-medium text-white">Image</label>
            </div>

            <div>
                <label htmlFor="points" className="block mb-2 text-sm font-medium text-white">Points</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <PointsIcon className="w-5 h-5 text-gray-400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </div>
                    <input
                        type="number"
                        id="points"
                        name="points"
                        min={0}
                        required
                        onChange={handleInputChange}
                        className="borde text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0" />
                </div>
            </div>
            <button type="submit"
                className="mx-auto inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                <span
                    className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                    {t('create_requirement')}
                </span>
            </button>

            <FormOutputMessage errors={errors} success={success} />
        </form>
    );
}

export default RequirementForm;