import { useTranslation } from "react-i18next";
import { Requirement } from "../../models/Requirement";
import DropzoneFiles from "./DropzoneFiles";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import { validateRequirement } from "../../services/RequirementService";
import FormOutputMessage from "./FormOutputMessage";


interface ValidateRequirementModalProps {
    requirement: Requirement;
    closeModal: () => void;
}

function ValidateRequirementModal({ requirement, closeModal }: ValidateRequirementModalProps) {
    const { t } = useTranslation();

    const [errors, setErrors] = useState<string[]>([]);
    const [success, setSuccess] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [validateDict, setValidateDict] = useState({
        files: [],
        requirement_id: requirement.getId(),
    });

    const handleValidate = () => {
        setIsLoading(true);
        validateRequirement(validateDict).then(() => {
            setErrors([]);
            setIsLoading(false);
            closeModal();
            window.location.replace('/requirements/validated');
        }).catch((error) => {
            setIsLoading(false);
            setErrors([]);
            setSuccess(null);
            setErrors((prevErrors) => {
                const newErrors = error['errors'].map((error: string) => t(error));
                return [...prevErrors, ...newErrors];
            });

        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;
        if (type === 'file') setValidateDict({ ...validateDict, [name]: value });
    };

    return (
        <div>
            {isLoading && (<LoadingScreen />)}
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto scrollbar-none fixed inset-0 z-40 outline-none focus:outline-none">
                <div className="relative p-4 lg:w-3/4 mx-auto max-w-7xl ">
                    <div className='w-full  flex-col flex rounded-lg bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl lg:space-y-8'>
                        <div className='flex flex-col lg:flex-row w-full items-start justify-center'>
                            <div className='flex w-full lg:w-1/2 items-center p-4 lg:p-8 flex-col justify-center'>
                                <img className="h-24 lg:h-48 mx-auto object-cover" src={requirement.getImage()} alt="icon" />
                                <hr className="h-px my-2 lg:my-8 w-full border-0 bg-gray-700" />
                                <div className='flex items-center text-center justify-center'>
                                    <h2 className="text-xl lg:text-4xl font-extrabold text-white">
                                        {requirement.getName() + " (" + requirement.getPoints() + " " + t('points') + ")"}
                                    </h2>
                                </div>
                                <hr className="h-px my-2 lg:my-8 w-full border-0 bg-gray-700" />
                                <div className='flex items-center text-center justify-center'>
                                    <p className={"text-base lg:text-xl lg:py-4 text-gray-400"}>
                                        {requirement.getDescription()}
                                    </p>
                                </div>
                            </div>
                            <div className='flex w-full lg:w-1/2 p-4 lg:p-8 items-center justify-start h-full lg:space-y-4 flex-col text-center'>
                                <h2 className="text-lg lg:text-2xl font-extrabold items-start text-white">{t('attach_your_files')}</h2>
                                <DropzoneFiles id="files" onChange={handleInputChange} />
                                <FormOutputMessage errors={errors} success={success} />
                            </div>
                        </div>
                        <div className="flex space-x-4 p-4 lg:p-8 w-full items-center justify-between lg:justify-end">
                            <button type="button" onClick={closeModal} className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-red-700 to-red-600  p-1 shadow-2xl">
                                <div className=" block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 px-8 py-2">
                                    <div className="flex text-center justify-between w-full">
                                        <h3 className="text-sm font-bold text-gray-200">
                                            {t('cancel')}
                                        </h3>
                                    </div>
                                </div>
                            </button>
                            <button type="button" onClick={handleValidate} className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-green-700 to-green-600 p-1 shadow-2xl">
                                <div className="block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 px-8 py-2">
                                    <div className="flex text-center justify-between w-full">
                                        <h3 className="text-sm font-bold text-gray-200">
                                            {t('validate')}
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

export default ValidateRequirementModal;