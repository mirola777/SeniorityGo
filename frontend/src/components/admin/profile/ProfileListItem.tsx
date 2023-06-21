import { Profile } from "../../../models/Profile";
import ProfileDeleteButton from "./ProfileDeleteButton";

interface ProfileListItemProps {
    profile: Profile;
    onDeleteProfile: (profile: Profile) => void;
}

function ProfileListItem({profile, onDeleteProfile}: ProfileListItemProps) {
    return (
        <div className="transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
            <div className="transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4">
                <div className="flex text-center items-center justify-between w-full">
                    <h3 className="text-sm font-bold text-gray-200">
                        {profile.getName()}
                    </h3>
                    <ProfileDeleteButton onDeleteProfile={onDeleteProfile} profile={profile} />
                </div>
            </div>
        </div>
    );
}

export default ProfileListItem;