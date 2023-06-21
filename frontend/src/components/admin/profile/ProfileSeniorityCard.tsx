import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Seniority } from '../../../models/Seniority';
import ProfilePokemonModal from './ProfilePokemonModal';
import { Pokemon } from '../../../models/Pokemon';
import ProfileRequirementsModal from './ProfileRequirementsModal';
import { Requirement } from '../../../models/Requirement';


interface AdminProfileSeniorityCardProps {
    seniority: Seniority;
    handlePokemonModal: (seniority: Seniority, pokemon: Pokemon) => void;
    handleRequirementModal: (seniority: Seniority, requirement: Requirement) => void;
}


function AdminProfileSeniorityCard({ seniority, handlePokemonModal, handleRequirementModal }: AdminProfileSeniorityCardProps) {
    // Translation component
    const { t } = useTranslation();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [requirementsModalIsOpen, setRequirementsModalIsOpen] = useState(false);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [requirements, setRequirements] = useState<Requirement[]>([]);

    function onPokemonSelected(pokemon: Pokemon) {
        setPokemon(pokemon);
        handlePokemonModal(seniority, pokemon);
        closeModal();
    }

    function onRequirementSelected(requirement: Requirement) {
        handleRequirementModal(seniority, requirement);
        if (requirements.find((selectedRequirement) => selectedRequirement.getId() === requirement.getId()) !== undefined) {
            setRequirements((prevRequirements) => {
                return prevRequirements.filter((selectedRequirement) => selectedRequirement.getId() !== requirement.getId());
            });

            return;
        }

        setRequirements((prevRequirements) => {
            return [...prevRequirements, requirement];
        });
        closeModal();
    }

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function openRequirementsModal() {
        setRequirementsModalIsOpen(true);
    }

    function closeRequirementsModal() {
        setRequirementsModalIsOpen(false);
    }

    return (
        <>
            {modalIsOpen && <ProfilePokemonModal handlePokemonModal={onPokemonSelected} seniority={seniority} closeModal={closeModal} />}
            {requirementsModalIsOpen && <ProfileRequirementsModal previousRequirements={requirements} handleRequirementSelected={onRequirementSelected} seniority={seniority} closeModal={closeRequirementsModal} />}
            <div className="inline-flex h-full items-center justify-between w-full p-5  border-2  rounded-lg cursor-pointer 0 border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                <div className="flex flex-col justify-center w-full items-center">
                    {pokemon && (<img className="w-24 h-24 rounded-full" src={pokemon?.getSmallImage()} alt="Pokemon" />)}
                    <div className="text-lg font-semibold">{seniority.getName() + " (" + seniority.getLevel() + ")"}</div>
                    <div className='flex w-full flex-row mt-4 text-center justify-center items-center space-x-2'>
                        <div onClick={openModal} className="w-full mx-auto inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[1px] text-white focus:outline-none focus:ring active:text-opacity-75">
                            <span
                                className="block rounded-full bg-dark-blue-800/60 px-2 py-2 text-xs font-medium hover:bg-dark-blue-800/40">
                                {t('select_a_pokemon')}
                            </span>
                        </div>

                        <div onClick={openRequirementsModal} className="w-full mx-auto inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[1px] text-white focus:outline-none focus:ring active:text-opacity-75">
                            <span
                                className="block rounded-full bg-dark-blue-800/60 px-2 py-2 text-xs font-medium hover:bg-dark-blue-800/40">
                                {t('select_requirements')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminProfileSeniorityCard;