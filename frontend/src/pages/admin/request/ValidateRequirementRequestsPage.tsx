import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getRequestsValidateRequirement } from '../../../services/RequestService';
import { RequestValidateRequirement } from '../../../models/RequestValidateRequirement';
import RequestValidateRequirementCard from '../../../components/common/RequestValidateRequirementCard';

function ValidateRequirementRequestsPage() {
    // Translation component
    const { t } = useTranslation();

    const [requests, setRequests] = useState<RequestValidateRequirement[]>([]);

    const deleteRequest = (request: RequestValidateRequirement) => {
        const newRequests = requests.filter((r) => r.getId() !== request.getId());
        setRequests(newRequests);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getRequestsValidateRequirement().then((requests) => {
                setRequests(requests);
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [requests]);

    return (
        <div className='py-8 pr-8 mx-auto w-full'>
            <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-5xl font-extrabold text-white">{t('requirement_requests')}</h2>
                </div>

                <hr className="h-px my-8 border-0 bg-gray-700" />

                <div className="flex flex-col space-y-4">
                    {requests.map((request) => (
                        <RequestValidateRequirementCard key={request.getId()} request={request} deleteRequest={deleteRequest} />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default ValidateRequirementRequestsPage;