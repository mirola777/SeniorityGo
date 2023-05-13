import { useParams } from 'react-router-dom';
import { getProfile } from '../../services/ProfileService';
import { useEffect, useState } from 'react';
import { Profile } from '../../models/Profile';
import ProfileSeniorityRoadmapItem from '../../components/common/profile/ProfileSeniorityRoadmapItem';

function ProfileDetailedPage() {

    // Profile 
    const [profile, setProfile] = useState<Profile | null>(null);

    // Get the id from the URL params
    const { id = '' } = useParams<{ id: string }>();
    const idInt = parseInt(id, 10);

    useEffect(() => {
        getProfile(idInt).then((profile) => {
            setProfile(profile);
        }
        )
    }, [idInt]);


    return (
        <div className='p-8 mx-auto max-w-screen-2xl w-full overflow-y-auto scrollbar-none'>
            <div className=' rounded-lg space-y-8 '>
                <div className='flex flex-col my-48 items-center text-center justify-between space-y-8'>
                    <h2 className="text-7xl dark:text-white">{profile?.getName()}</h2>
                    <h2 className="text-xl max-w-3xl text-gray-400">{profile?.getDescription()}</h2>
                </div>

                <section className=''>
                        {profile?.getProfilesSeniorities().map((profileseniority) => (
                            <ProfileSeniorityRoadmapItem profileseniority={profileseniority} />
                        ))}
                    </section>
            </div >
        </div >
    );
}

export default ProfileDetailedPage;