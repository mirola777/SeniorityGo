import { useEffect, useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ProfilesIcon } from "../../../assests/icons/RectangleGroup.svg"
import FormOutputMessage from '../../common/FormOutputMessage';
import { getUserSession } from '../../../services/AuthService';
import { Profile } from '../../../models/Profile';
import { Seniority } from '../../../models/Seniority';
import { getOrganizationSeniorities } from '../../../services/SeniorityService';
import AdminProfileSeniorityCard from './ProfileSeniorityCard';
import { Pokemon } from '../../../models/Pokemon';
import { createProfile } from '../../../services/ProfileService';
import { Requirement } from '../../../models/Requirement';


interface ProfileFormProps {
    onCreateProfile: (profile: Profile) => void;
}


function ProfileForm({ onCreateProfile }: ProfileFormProps) {
    const { t } = useTranslation();

    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState<string | null>(null);
    const [, setCreatedProfile] = useState<Profile | null>(null);
    const [seniorities, setSeniorities] = useState<Seniority[]>([]);
    const [selectedSeniorities, setSelectedSeniorities] = useState<Seniority[]>([]);
    const [organization, setOrganization] = useState<number>(0);
    const [profileDict, setProfileDict] = useState({
        name: '',
        description: '',
        organization: organization,
        seniorities: [
            {
                seniority: 0,
                pokemon: 0,
                requirements: [
                    {
                        requirement: 0
                    }
                ]
            }
        ],
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(profileDict);
        
        createProfile(profileDict).then((profileResponse) => {

            setSuccess(t('profile_created'));
            onCreateProfile(profileResponse);
            setCreatedProfile(profileResponse);
            setErrors([]);
        }).catch((error) => {

            setSuccess(null);
            setCreatedProfile(null);
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
            setProfileDict({ ...profileDict, [name]: parseInt(value) });
        else if (type === 'text' || type === 'file')
            setProfileDict({ ...profileDict, [name]: value });
        else if (type === 'checkbox' && name === 'seniority') {
            if (event.target.checked) {
                if (profileDict.seniorities.at(0)?.seniority === 0)
                    profileDict.seniorities = [];

                profileDict.seniorities.push({ seniority: parseInt(value), pokemon: 0, requirements: [] });
                setProfileDict(profileDict);
                setSelectedSeniorities([...selectedSeniorities, seniorities.find((seniority) => seniority.getId() === parseInt(value))!]);
            } else {
                // remove the number from seniorities.seniority array in profileDict
                const index = profileDict.seniorities.findIndex((seniority) => seniority.seniority === parseInt(value));
                profileDict.seniorities.splice(index, 1);
                setProfileDict(profileDict);
                setSelectedSeniorities(selectedSeniorities.filter((seniority) => seniority.getId() !== parseInt(value)));
            }
        }
    };


    const handlePokemonModal = (seniority: Seniority, pokemon: Pokemon) => {
        const index = profileDict.seniorities.findIndex((seniorityDict) => seniorityDict.seniority == seniority.getId());
        profileDict.seniorities[index].pokemon = parseInt(String(pokemon.getId()));
        setProfileDict(profileDict);
    };


    const handleRequirementModal = (seniority: Seniority, requirement: Requirement) => {
        const index = profileDict.seniorities.findIndex((seniorityDict) => seniorityDict.seniority == seniority.getId());

        if (profileDict.seniorities[index].requirements.length > 0 && profileDict.seniorities[index].requirements[0].requirement === 0)
            profileDict.seniorities[index].requirements = [];

        if (profileDict.seniorities[index].requirements.find((requirementDict) => requirementDict.requirement == requirement.getId()) !== undefined)
            profileDict.seniorities[index].requirements = profileDict.seniorities[index].requirements.filter((requirementDict) => requirementDict.requirement !== requirement.getId());
        else 
            profileDict.seniorities[index].requirements.push({ requirement: requirement.getId() });

        setProfileDict(profileDict);
    };


    useEffect(() => {
        getUserSession().then((user) => {
            if (user?.getUser() === null || user?.getUser() === undefined) {
                return;
            }

            getOrganizationSeniorities().then((seniorities) => {
                setSeniorities(seniorities);
                setOrganization(user.getUser().getOrganization());
                setProfileDict({ ...profileDict, organization: user.getUser().getOrganization() });
            });
        });
    }, []);

    return (
        <form className='w-full  mx-auto space-y-4 flex flex-col' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <ProfilesIcon className="w-5 h-5 text-gray-400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        required
                        className="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Name..." />
                </div>
            </div>

            <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <ProfilesIcon className="w-5 h-5 text-gray-400" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
                <label htmlFor="seniorities" className="block mb-2 text-sm font-medium text-white">Select your Seniorities</label>
                <ul className="items-center w-full text-sm font-medium  border  rounded-lg sm:flex bg-gray-700 border-gray-600 text-white">
                    {seniorities.map((seniority) => (
                        <li key={seniority.getId()} className="w-full border-b sm:border-b-0 sm:border-r border-gray-600">
                            <div className="flex items-center px-3">
                                <input id={String(seniority.getId())} name="seniority" value={String(seniority.getId())} type="checkbox" onChange={handleInputChange} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500" />
                                <label htmlFor={String(seniority.getId())} className="w-full py-3 ml-2 text-sm font-medium text-gray-300">{seniority.getName() + " (" + seniority.getLevel() + ")"}</label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedSeniorities.length > 0 && (
                <div>
                    <label htmlFor="selectedseniorities" className="block mb-2 text-sm font-medium text-white">Select a Pokemon for each Seniority</label>
                    <ul className="grid w-full gap-2 md:grid-cols-2">
                        {selectedSeniorities.map((seniority) => (
                            <li key={seniority.getId()}>
                                <AdminProfileSeniorityCard handleRequirementModal={handleRequirementModal} handlePokemonModal={handlePokemonModal} seniority={seniority} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            <button type="submit"
                className="mx-auto inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[4px] text-white focus:outline-none focus:ring active:text-opacity-75">
                <span
                    className="block rounded-full bg-dark-blue-800/60 px-8 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                    {t('create_profile')}
                </span>
            </button>

            <FormOutputMessage errors={errors} success={success} />
        </form>
    );
}

export default ProfileForm;