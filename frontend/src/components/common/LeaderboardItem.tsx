import { Developer } from '../../models/Developer';


interface LeaderBoardItemProps {
    developer: Developer;
    index: number;
}


function LeaderBoardItem({ developer, index }: LeaderBoardItemProps) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <div className="pl-3">
                    <div className="text-4xl">{index + 1}</div>
                </div>
            </td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={developer.getAvatar()} alt="Avatar" />
                <div className="pl-3">
                    <div className="text-base font-semibold">{developer.getUser().getUsername()}</div>
                </div>
            </th>
            <td className="px-6 py-4">
                {index}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="shadow-lg bg-gray-700 rounded-lg text-right pr-4">
                    <div className="text-3xl text-white">{index + 1}</div>
                </div>
            </td>
        </tr>
    );
}

export default LeaderBoardItem;