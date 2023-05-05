import { Developer } from '../../../models/Developer';
import { Admin } from '../../../models/Admin';


interface UserCardProps {
    user: Developer | Admin;
}

function UserCard({ user }: UserCardProps) {
    return (
        <div className="transition ease-in-out hover:scale-105 hover:bg-indigo-500 duration-150 rounded-2xl  bg-gradient-to-r h-full from-fuchsia-700 to-blue-600 p-0.5 shadow-2xl">
            <div className="transition block rounded-xl h-full hover:bg-gray-800/70 duration-150 bg-gray-800/90 p-4 space-y-4">
                <div className="flex items-center gap-4">
                    {user instanceof Developer && (<img className="h-14 w-14  object-cover rounded-full" src={user.getAvatar()} alt="avatar" />)}
                    <div>
                        {user instanceof Developer ?
                            (<h3 className="text-base font-medium text-white">{user.getFirstName() + " " + user.getLastName()}<span className='text-gray-400'> ({user.getUser().getUsername()})</span></h3>) :
                            (<h3 className="text-base font-medium text-white">{user.getUser().getUsername()}</h3>)}
                        <h3 className="text-sm font-medium text-white"><span className='text-gray-400'>{user.getUser().getEmail()}</span></h3>
                    </div>
                </div>

                {user instanceof Developer && user.getDeveloperProfiles().length > 0 && (
                    <ul className="mt-4 space-y-2">
                        {user instanceof Developer && (user.getDeveloperProfiles().map((developerprofile) => {
                            return (
                                <li>
                                    <div className="block h-full text-base rounded-lg border-2 border-blue-600 px-4 py-1.5 hover:border-fuchsia-700">
                                        <strong className="font-medium text-sm text-white">{developerprofile.getProfile().getName() + " (" + developerprofile.getSeniority().getName() + ")"}</strong>
                                    </div>
                                </li>
                            )
                        }))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default UserCard;