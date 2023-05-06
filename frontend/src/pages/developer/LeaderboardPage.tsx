import { useTranslation } from 'react-i18next';
import LeaderBoardTable from '../../components/common/LeaderboardTable';

function LeaderBoardPage() {
    // Translation component
    const { t } = useTranslation();


    return (
        <div className='p-8 mx-auto w-full overflow-y-auto scrollbar-none'>
            <div className='rounded-lg  space-y-8'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-5xl font-extrabold dark:text-white">{t('leaderboard')}</h2>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <LeaderBoardTable />
                </div>
            </div>
        </div>
    );
}

export default LeaderBoardPage;