import { useTranslation } from "react-i18next";
import { Seniority } from "../../../models/Seniority";
import { useEffect, useState } from "react";
import PokemonCard from "../../common/PokemonCard";
import { Requirement } from "../../../models/Requirement";
import { getOrganizationRequirements } from "../../../services/RequirementService";
import RequirementCard from "../requirement/RequirementCard";
import ProfileRequirementModalCard from "./ProfileRequirementModalCard";


interface ProfileRequirementsModalProps {
    closeModal: () => void;
    handleRequirementSelected: (requirements: Requirement) => void;
    previousRequirements: Requirement[];
    seniority: Seniority;
}

function ProfileRequirementsModal({ seniority, closeModal, handleRequirementSelected, previousRequirements }: ProfileRequirementsModalProps) {
    const { t } = useTranslation();

    const [requirements, setRequirements] = useState<Requirement[]>([]);
    const [selectedRequirements, setSelectedRequirements] = useState<Requirement[]>(previousRequirements);

    function onRequirementSelected(requirement: Requirement) {
        handleRequirementSelected(requirement);
        setSelectedRequirements((prevSelectedRequirements) => {
            return [...prevSelectedRequirements, requirement];
        });
    }

    useEffect(() => {
        getOrganizationRequirements().then((requirements) => {
            setRequirements(requirements);
        });
    }, []);

    return (
        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto scrollbar-none fixed inset-0 z-40 outline-none focus:outline-none">
                <div className="relative p-4  mx-auto ">
                    <div className='w-full flex-col flex rounded-lg bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl lg:space-y-8'>
                        <div className='flex flex-col lg:flex-row w-full items-start justify-center'>
                            <div className='flex w-full items-center p-4 lg:p-8 flex-col justify-center'>
                                <div className='flex items-center text-center justify-center'>
                                    <h2 className="text-xl lg:text-4xl font-extrabold text-white">
                                        {t('select_requirements')}
                                    </h2>
                                </div>
                                <hr className="h-px my-2 lg:my-8 w-full border-0 bg-gray-700" />
                                <div className='flex  items-center text-center justify-center'>
                                    <ul className="grid gap-2 grid-cols-2  h-96 scrollbar-none overflow-x-auto p-4">
                                        {requirements.map((requirement) =>
                                            <li>
                                                <div className="cursor-pointer">
                                                    <ProfileRequirementModalCard selectedRequirements={selectedRequirements} onRequirementSelected={onRequirementSelected} requirement={requirement}></ProfileRequirementModalCard>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4 p-4 lg:p-8 w-full items-center justify-between lg:justify-end">
                            <button type="button" onClick={closeModal} className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-green-700 to-green-600  p-1 shadow-2xl">
                                <div className=" block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 px-8 py-2">
                                    <div className="flex text-center justify-between w-full">
                                        <h3 className="text-sm font-bold text-gray-200">
                                            {t('close')}
                                        </h3>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
        </div>
    );
}

export default ProfileRequirementsModal;