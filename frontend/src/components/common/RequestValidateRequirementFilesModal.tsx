import { useTranslation } from "react-i18next";
import { RequestValidateRequirement } from "../../models/RequestValidateRequirement";
import FileDownloadCard from "./FileDownloadCard";


interface RequestValidateRequirementFilesModalProps {
    request: RequestValidateRequirement;
    closeModal: () => void;
}

function RequestValidateRequirementFilesModal({ request, closeModal }: RequestValidateRequirementFilesModalProps) {
    const { t } = useTranslation();

    return (
        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto scrollbar-none fixed inset-0 z-40 outline-none focus:outline-none">
                <div className="relative p-4 lg:w-3/4 mx-auto max-w-7xl ">
                    <div className='w-full  flex-col flex rounded-lg bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl lg:space-y-8'>
                        <div className='flex flex-col lg:flex-row w-full items-start justify-center'>
                            <div className='flex w-full lg:w-1/2 items-center p-4 lg:p-8 flex-col justify-center'>
                                <img className="h-24 lg:h-48 mx-auto object-cover" src={request.getRequirement()?.getImage()} alt="icon" />
                                <hr className="h-px my-2 lg:my-8 w-full border-0 bg-gray-700" />
                                <div className='flex items-center text-center justify-center'>
                                    <h2 className="text-xl lg:text-4xl font-extrabold text-white">
                                        {request.getRequirement()?.getName() + " (" + request.getRequirement()?.getPoints() + " " + t('points') + ")"}
                                    </h2>
                                </div>
                                <hr className="h-px my-2 lg:my-8 w-full border-0 bg-gray-700" />
                                <div className='flex items-center text-center justify-center'>
                                    <p className={"text-base lg:text-xl lg:py-4 text-gray-400"}>
                                        {request.getRequirement()?.getDescription()}
                                    </p>
                                </div>
                            </div>
                            <div className='flex w-full lg:w-1/2 items-center p-4 lg:p-8 flex-col justify-center space-y-4'>
                                <h2 className="text-xl lg:text-4xl font-extrabold text-white">
                                    {t('files')}
                                </h2>
                                {request.getFiles().map((file, index) =>
                                    <FileDownloadCard key={index} filename={file.getName()} url={file.getUrl()} />
                                )}
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

export default RequestValidateRequirementFilesModal;