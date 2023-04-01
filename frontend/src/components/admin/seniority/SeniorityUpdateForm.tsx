import { useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { updateSeniority } from '../../../services/SeniorityService';
import { ReactComponent as NameIcon } from '../../../assests/icons/CodeBracket.svg';
import { ReactComponent as LevelIcon } from '../../../assests/icons/ArrowTrendingUp.svg';
import { Seniority } from '../../../models/Seniority';
import FormOutputMessage from '../../common/FormOutputMessage';


interface SeniorityUpdateFormProps {
    seniority: Seniority;
    onUpdateSeniority: (seniority: Seniority) => void;
}


function SeniorityUpdateForm({ seniority, onUpdateSeniority }: SeniorityUpdateFormProps) {
    // Translation component
    const { t } = useTranslation();

    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState<string | null>(null);
    const [seniorityDict, setSeniorityDict] = useState({
        id: seniority.getId(),
        name: seniority.getName(),
        level: seniority.getLevel(),
        organization: 1
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateSeniority(seniority.getId(), seniorityDict).then((seniorityResponse) => {

            onUpdateSeniority(seniorityResponse);
            setSuccess(t('seniority_updated'));
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
            setSeniorityDict({ ...seniorityDict, [name]: parseInt(value) });
        else if (type === 'text')
            setSeniorityDict({ ...seniorityDict, [name]: value });
    };

    return (
        <form className='w-full max-w-lg mx-auto space-y-4 flex flex-col' onSubmit={handleSubmit}>
            <div>
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
                        value={seniorityDict.name}
                        className="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Junior, SemiSenior, Senior..." />
                </div>
            </div>

            <div>
                <label htmlFor="level" className="block mb-2 text-sm font-medium text-white">Level</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <LevelIcon className="w-5 h-5 text-gray-400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </div>
                    <input
                        type="number"
                        id="level"
                        name="level"
                        min={0}
                        onChange={handleInputChange}
                        value={seniorityDict.level}
                        className="borde text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0" />
                </div>
            </div>
            <button type="submit"
                className="mx-auto inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                <span
                    className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                    {t('update_seniority')}
                </span>
            </button>
            <FormOutputMessage errors={errors} success={success} />
        </form>
    );
}

export default SeniorityUpdateForm;