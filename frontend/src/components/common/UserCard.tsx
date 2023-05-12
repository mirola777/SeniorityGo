import { Developer } from '../../models/Developer';
import { Admin } from '../../models/Admin';


interface UserCardProps {
    user: Developer | Admin | null;
}


function UserCard({ user }: UserCardProps) {
    return (
        <div className='p-4'>
            <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                <div className='flex flex-col space-y-4 items-center'>
                    {user instanceof Developer && (<img src={user.getAvatar()} alt="Avatar" className="h-28 w-28 rounded-full object-cover"></img>)}
                    <h2 className="text-3xl font-extrabold text-white">{user?.getUser().getUsername()}</h2>
                    <h2 className="text-lg font-extrabold text-gray-400">{user?.getUser().getEmail()}</h2>
                </div>

                <hr className="h-px my-8  border-0 bg-gray-700" />
                {user instanceof Developer && (
                    <div>
                        <div className='flex flex-col space-y-2'>
                            <h2 className="text-lg font-extrabold text-white">{user?.getFirstName() + " " + user?.getLastName()}</h2>
                            <h2 className="text-lg font-extrabold text-white">{user?.getPhoneNumber()}</h2>
                            <h2 className="text-lg font-extrabold text-white">{user?.getBirthday().toString()}</h2>
                        </div>
                        <hr className="h-px my-8  border-0 bg-gray-700" />
                        <div className="flex items-center flex-wrap">
                            {user?.getDeveloperProfiles().map((developerprofile) => (
                                <span className="text-sm whitespace-nowrap font-medium m-0.5 px-2.5 py-0.5 rounded-xl bg-cyan-900 text-cyan-400 ">
                                    {developerprofile.getProfile().getName() + " (" + developerprofile.getSeniority().getName() + ")"}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserCard;