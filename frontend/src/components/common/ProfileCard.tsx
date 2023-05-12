import { Profile } from '../../models/Profile';

interface ProfileCardProps {
    profile: Profile;
}

function ProfileCard({ profile }: ProfileCardProps) {
    return (
        <div className="h-full transition ease-in-out hover:scale-105 hover:bg-indigo-500 duration-150 rounded-2xl max-w-md bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
            <a className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4 sm:p-6 lg:p-8" href="#">
                <div className="my-4 text-center">
                    <h3 className="text-lg font-bold text-gray-200 sm:text-xl">
                        {profile.getName()}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                        {profile.getDescription()}
                    </p>
                </div>
            </a>
        </div>
    );
}

export default ProfileCard;