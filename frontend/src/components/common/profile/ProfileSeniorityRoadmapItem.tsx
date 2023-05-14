import { useTranslation } from 'react-i18next';
import { ProfileSeniority } from '../../../models/ProfileSeniority';
import { capitalizeFirstLetter } from '../../../util/CapitalizeFirstLetter';
import RequirementRoadmapItem from '../RequirementRoadmapItem';
import { Developer } from '../../../models/Developer';


interface ProfileSeniorityRoadmapItemProps {
    profileseniority: ProfileSeniority;
    developer?: Developer;
}

function ProfileSeniorityRoadmapItem({ developer, profileseniority }: ProfileSeniorityRoadmapItemProps) {
    const { t } = useTranslation();

    const pokemon = profileseniority.getPokemon();
    const seniority = profileseniority.getSeniority();
    const requirements = profileseniority.getRequirements();

    let isCompleted = false;
    if (developer) {
        isCompleted = true;
        requirements.map((requirement) => {
            const developerrequirement = developer.getDeveloperRequirements().find((developerRequirement) => developerRequirement.getRequirement().getId() === requirement.getId());
            if (!developerrequirement || !developerrequirement?.getIsCompleted()) {
                isCompleted = false;
            }
        });
    }

    return (
        <div className="flex w-full justify-center space-x-8 ">
            <div className="sticky top-0 w-1/4 mb-8  flex flex-col bg-white items-center justify-center h-full transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-0.5 shadow-2xl">
                <div className="h-full flex flex-col text-center space-y-8  transition items-center rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4">
                    <strong className="font-medium text-3xl text-white">{seniority?.getName() + " (" + t('level') + " " + seniority?.getLevel() + ")"}</strong>
                    <img className="w-2/3 p-4" src={pokemon?.getImage()} alt={pokemon?.getName()} />
                    <p className="text-5xl text-white">{capitalizeFirstLetter(pokemon ? pokemon.getName() : "")}</p>
                </div>
            </div>

            <div className="w-3/4 mx-auto ">

                <div className="relative">

                    <div
                        className="absolute hidden w-[4px] h-full transform -translate-x-1/2 rounded-2xl bg-blue-700 lg:block left-1/2">
                    </div>
                    <div className="space-y-2 lg:space-y-4">
                        {requirements.map((requirement, index) => (
                            <RequirementRoadmapItem developer={developer} index={index} requirement={requirement} />
                        ))}

                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    {isCompleted ? (
                        <div className="flex items-center justify-center w-48 h-48 my-24  border-4  rounded-full border-cyan-700 bg-green-800">
                            <img className="w-32" src={pokemon?.getSmallImage()} alt={pokemon?.getName()} />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-48 h-48 my-24  border-4  rounded-full border-blue-700 bg-dark-blue-300">
                            <img className="w-32" src={pokemon?.getSmallImage()} alt={pokemon?.getName()} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileSeniorityRoadmapItem;