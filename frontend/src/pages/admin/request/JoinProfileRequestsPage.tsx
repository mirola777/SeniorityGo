import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getRequestsJoinProfile } from '../../../services/RequestService';
import { RequestJoinProfile } from '../../../models/RequestJoinProfile';
import RequestJoinProfileCard from '../../../components/common/RequestJoinProfileCard';

function JoinProfileRequestsPage() {
    // Translation component
    const { t } = useTranslation();

    const [requests, setRequests] = useState<RequestJoinProfile[]>([]);

    const deleteRequest = (request: RequestJoinProfile) => {
        const newRequests = requests.filter((r) => r.getId() !== request.getId());
        setRequests(newRequests);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            getRequestsJoinProfile().then((requests) => {
                setRequests(requests);
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [requests]);

    return (
        <div className='py-8 pr-8 mx-auto w-full'>
            <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-5xl font-extrabold text-white">{t('profile_requests')}</h2>
                </div>

                <hr className="h-px my-8 border-0 bg-gray-700" />

                <div className="flex flex-col space-y-4">
                    {requests.map((request) => (
                        <RequestJoinProfileCard key={request.getId()} request={request} deleteRequest={deleteRequest} />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default JoinProfileRequestsPage;