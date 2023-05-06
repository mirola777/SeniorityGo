import { ProfileSeniority } from '../../models/ProfileSeniority';

interface ProfileSeniorityCardProps {
    profileseniority: ProfileSeniority;
}

function ProfileSeniorityCard({ profileseniority }: ProfileSeniorityCardProps) {
    return (
        <div className="w-full  block h-full text-base rounded-lg border-2 border-blue-600 px-4 py-1.5 hover:border-fuchsia-700">
            <strong className="font-medium text-sm text-white">{profileseniority.getSeniority()?.getName()}</strong>
        </div>
    );
}

export default ProfileSeniorityCard;