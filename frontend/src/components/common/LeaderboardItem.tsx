import { useEffect, useState } from 'react';
import { Developer } from '../../models/Developer';
import { getUserSession } from '../../services/AuthService';


interface LeaderBoardItemProps {
    developer: Developer;
    index: number;
}


function LeaderBoardItem({ developer, index }: LeaderBoardItemProps) {

    const [color, setColor] = useState<string>();

    useEffect(() => {
        if (index === 0)      setColor("from-dark-blue-300 to-blue-900")
        else if (index === 1) setColor("from-dark-blue-300/80 to-blue-900/80")
        else if (index === 2) setColor("from-dark-blue-300/60 to-blue-900/60")
        else if (index === 3) setColor("from-dark-blue-300/40 to-blue-900/40")
        else if (index === 4) setColor("from-dark-blue-300/20 to-blue-900/20")
        else                  setColor("from-dark-blue-300/20 to-blue-900/0")

        getUserSession().then((user) => {
            if (user) {
                if (user.getUser().getId() === developer.getUser().getId()) {
                    setColor("from-cyan-600/50 to-green-700/50");
                }
            }
        })
    });

    return (
        <tr className={"bg-gradient-to-r " + color + " border-b border-gray-700"}>
            <td className="w-4 p-4">
                <div className="pl-3">
                    <div className="text-4xl">{index + 1}</div>
                </div>
            </td>
            <th scope="row" className="w-1/4 px-6 py-4 whitespace-nowrap text-white">
                <div className="flex items-center h-full">
                    <img className="w-10 h-10 object-cover rounded-full" src={developer.getAvatar()} alt="Avatar" />
                    <div className="pl-3">
                        <div className="text-base font-semibold">{developer.getUser().getUsername()}</div>
                    </div>
                </div>

            </th>
            <td className="px-6 py-4 ">
                <div className="flex items-center flex-wrap">
                    {developer.getDeveloperProfiles().map((developerprofile) => {
                        return (
                            <span className="text-sm whitespace-nowrap font-medium m-0.5 px-2.5 py-0.5 rounded-xl bg-cyan-900 text-cyan-400 ">
                                {developerprofile.getProfile().getName() + " (" + developerprofile.getSeniority().getName() + ")"}
                            </span>
                        );
                    })
                    }
                </div>
            </td>
            <td className="px-6 py-4 w-1/4">
                <div className="text-right pr-4 ">
                    <div className="text-3xl text-white">{developer.getScore()}</div>
                </div>
            </td>
        </tr>
    );
}

export default LeaderBoardItem;