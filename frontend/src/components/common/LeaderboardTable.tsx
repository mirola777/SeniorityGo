import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingScreen from '../../components/common/LoadingScreen';
import { getOrganizationUsersDetailed } from '../../services/DeveloperService';
import { Developer } from '../../models/Developer';
import LeaderBoardItem from './LeaderboardItem';


function LeaderBoardTable() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [developers, setDevelopers] = useState<Developer[]>([]);

    useEffect(() => {
        getOrganizationUsersDetailed().then((developersResponse) => {
            setDevelopers(developersResponse);
        });
    }, []);

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="text-center px-6 py-3">
                        Points
                    </th>
                </tr>
            </thead>
            <tbody>
                {developers.length > 0 ? (developers.map((developer, index) => { 
                    return (<LeaderBoardItem index={index} developer={developer} />)
                })) : (<LoadingScreen />)}
            </tbody>
        </table>
    );
}

export default LeaderBoardTable;