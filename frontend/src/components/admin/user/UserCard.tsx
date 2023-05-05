import { ReactComponent as SeniorityIcon } from '../../../assests/icons/CodeBracket.svg';
import { t } from 'i18next';
import { Developer } from '../../../models/Developer';
import { Admin } from '../../../models/Admin';


interface UserCardProps {
    user: Developer | Admin;
}

function UserCard({ user }: UserCardProps) {
    return (
        <div className="transition ease-in-out hover:scale-105 hover:bg-indigo-500 duration-150 rounded-2xl max-w-md bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
            <div className="transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4 sm:p-6 lg:p-8">
                <div className="my-4 space-y-4 text-center">
                    <SeniorityIcon className="w-16 h-16 mx-auto text-gray-200" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                        {user.getUser().getUsername()}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                        {t('level') + " " + user.getUser().getEmail()}
                    </p>
                    {user instanceof Developer && (<img className="mx-auto rounded-full" src={user.getAvatar()} alt="avatar" />)}
                </div>
            </div>
        </div>
    );
}

export default UserCard;