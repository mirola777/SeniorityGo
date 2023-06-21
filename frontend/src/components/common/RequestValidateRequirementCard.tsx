import { useTranslation } from 'react-i18next';
import { formatDateTimeNotification } from '../../util/DateFormat';
import { RequestValidateRequirement } from '../../models/RequestValidateRequirement';
import { acceptValidateRequirement, rejectValidateRequirement } from '../../services/RequirementService';
import { useState } from 'react';
import RequestValidateRequirementFilesModal from './RequestValidateRequirementFilesModal';


interface RequestValidateRequirementCardProps {
    request: RequestValidateRequirement;
    deleteRequest: (request: RequestValidateRequirement) => void;
}

function RequestValidateRequirementCard({ request, deleteRequest }: RequestValidateRequirementCardProps) {
    const { t } = useTranslation();

    const rejectRequest = () => {
        const requirementID = request.getRequirement()?.getId() ?? 0;
        const developerID = request.getDeveloper()?.getUser().getId() ?? 0;

        rejectValidateRequirement(requirementID, developerID).then(() => {
            deleteRequest(request);
        });
    };


    const acceptRequest = () => {
        const requirementID = request.getRequirement()?.getId() ?? 0;
        const developerID = request.getDeveloper()?.getUser().getId() ?? 0;

        acceptValidateRequirement(requirementID, developerID).then(() => {
            deleteRequest(request);
        });
    };


    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }


    return (
        <div>
            {modalIsOpen && <RequestValidateRequirementFilesModal request={request} closeModal={closeModal} />}
            <div className="h-full transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-0.5 shadow-2xl">
                <div className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 py-2 px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img className="rounded-full w-10 h-10" src={request.getDeveloper()?.getAvatar()} alt="avatar" />
                            <h3 className="text-sm font-bold text-gray-200">
                                {request.getDeveloper()?.getUser().getUsername() ?? ""}
                            </h3>

                            <h3 className="text-sm font-bold text-gray-400">
                                ({request.getRequirement()?.getName() + ", " + formatDateTimeNotification(request.getCreatedAt(), t)})
                            </h3>
                        </div>

                        <div className="flex flex-row items-center justify-center space-x-2">
                            <button className="inline-block rounded-full bg-gradient-to-r from-fuchsia-700 to-blue-600 p-[2px] text-white focus:outline-none focus:ring active:text-opacity-75">
                                <span
                                    onClick={openModal} className="block rounded-full bg-dark-blue-800/60 px-6 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                    {t('view_files')}
                                </span>
                            </button>
                            <button className="inline-block rounded-full bg-gradient-to-r from-green-700 to-green-600 p-[2px] text-white focus:outline-none focus:ring active:text-opacity-75">
                                <span
                                    onClick={acceptRequest} className="block rounded-full bg-dark-blue-800/60 px-6 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                    {t('accept')}
                                </span>
                            </button>
                            <button className="inline-block rounded-full bg-gradient-to-r from-red-700 to-red-600 p-[2px] text-white focus:outline-none focus:ring active:text-opacity-75">
                                <span
                                    onClick={rejectRequest} className="block rounded-full bg-dark-blue-800/60 px-6 py-2 text-sm font-medium hover:bg-dark-blue-800/40">
                                    {t('reject')}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RequestValidateRequirementCard;