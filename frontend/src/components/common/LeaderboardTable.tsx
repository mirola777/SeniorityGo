import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingScreen from '../../components/common/LoadingScreen';
import { getOrganizationUsers } from '../../services/DeveloperService';
import { Developer } from '../../models/Developer';
import LeaderBoardItem from './LeaderboardItem';


function LeaderBoardTable() {
    // Translation component
    const { t } = useTranslation();
    // Profiles var
    const [developers, setDevelopers] = useState<Developer[]>([]);

    useEffect(() => {
        getOrganizationUsers().then((developersResponse) => {
            setDevelopers(developersResponse);
        });
    }, []);

    return (
        <table className="w-full text-sm text-left bg-gradient-to-r from-gray-800 to-dark-blue-800  text-gray-400">
            <thead className="text-xs uppercase from-gray-800 to-dark-blue-800 text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {t("user")}
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {t("profiles")}
                    </th>
                    <th scope="col" className="text-center px-6 py-3">
                        {t("points")}
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