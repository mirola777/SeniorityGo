import { useTranslation } from 'react-i18next';
import { Developer } from '../../models/Developer';
import UserRequirementCard from './UserRequirementCard';
import { Requirement } from '../../models/Requirement';


interface UserRequirementsCardProps {
    user: Developer | null;
}


function UserRequirementsCard({ user }: UserRequirementsCardProps) {
    // Translation component
    const { t } = useTranslation();

    const requirements: Requirement[] = [];
    const requirementsSet = new Set();

    user?.getDeveloperProfiles().map((developerProfile) => {
        developerProfile.getProfile().getProfilesSeniorities().map((profileSeniority) => {
            profileSeniority.getRequirements().map((requirement) => {
                if (!requirementsSet.has(requirement.getId())) {
                    requirementsSet.add(requirement.getId());
                    requirements.push(requirement);
                }
                return null; 
            });
            return null; 
        });
        return null;
    });

    return (
        <div className='w-2/3 p-4'>
            <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
            <h3 className="text-3xl font-extrabold text-white">{t('requirements')}</h3>
                <div className='grid grid-cols-3 gap-2'>
                    {requirements.map((requirement) => (<UserRequirementCard requirement={requirement} />))}
                </div>

            </div>
        </div>
    );
}

export default UserRequirementsCard;