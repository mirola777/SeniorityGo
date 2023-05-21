import { useTranslation } from 'react-i18next';
import LeaderBoardTable from '../../components/common/LeaderboardTable';

function LeaderBoardPage() {
    // Translation component
    const { t } = useTranslation();


    return (
        <div className='p-2 lg:p-8 max-w-screen-2xl mx-auto w-full overflow-x-auto overflow-y-auto scrollbar-none'>
            <div className='rounded-lg  space-y-2 lg:space-y-8'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-white">{t('leaderboard')}</h2>
                </div>

                <div className="relative overflow-x-auto scrollbar-none shadow-md rounded-lg">
                    <LeaderBoardTable />
                </div>
            </div>
        </div>
    );
}

export default LeaderBoardPage;