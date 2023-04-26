import { useTranslation } from 'react-i18next';
import { Requirement } from '../../../models/Requirement';
import { deleteRequirement } from '../../../services/RequirementService';
import { useState } from 'react';

interface RequirementDeleteButtonProps {
    requirement: Requirement;
    onDeleteRequirement: (requirement: Requirement) => void;
}

function RequirementDeleteButton({requirement, onDeleteRequirement}: RequirementDeleteButtonProps) {
    const { t } = useTranslation();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const handleDelete = () => {
        deleteRequirement(requirement.getId()).then(() => {
            onDeleteRequirement(requirement);
            closeModal();
        });
    };

    return (
        <div>
            <button onClick={openModal} className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-red-700 to-red-600 p-1 shadow-2xl">
                <div className=" block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 px-8 py-2">
                    <div className="flex text-center justify-between w-full">
                        <h3 className="text-sm font-bold text-gray-200">
                            {t('delete')}
                        </h3>
                    </div>
                </div>
            </button>
            {modalIsOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className='w-full flex flex-col rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                                <div className='flex items-center text-center justify-center'>
                                    <h2 className="text-3xl font-extrabold text-white">
                                        {t('delete_requirement_sure')}
                                    </h2>
                                </div>
                                <hr className="h-px my-8 border-0 bg-gray-700" />
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-gray-200 text-lg leading-relaxed">
                                        {t('delete_sure_message')}
                                    </p>
                                </div>
                                <hr className="h-px my-8 border-0 bg-gray-700" />
                                <div className="flex space-x-4 items-center justify-end">
                                    <button type="button" onClick={closeModal} className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-green-700 to-green-600 p-1 shadow-2xl">
                                        <div className=" block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 px-8 py-2">
                                            <div className="flex text-center justify-between w-full">
                                                <h3 className="text-sm font-bold text-gray-200">
                                                    {t('cancel')}
                                                </h3>
                                            </div>
                                        </div>
                                    </button>
                                    <button type="button" onClick={handleDelete} className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-red-700 to-red-600 p-1 shadow-2xl">
                                        <div className=" block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 px-8 py-2">
                                            <div className="flex text-center justify-between w-full">
                                                <h3 className="text-sm font-bold text-gray-200">
                                                    {t('delete')}
                                                </h3>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-20 bg-black"></div>
                </>
            ) : null}
        </div>

    );
}

export default RequirementDeleteButton;