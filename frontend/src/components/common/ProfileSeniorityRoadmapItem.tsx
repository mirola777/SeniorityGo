import { useTranslation } from 'react-i18next';
import { ProfileSeniority } from '../../models/ProfileSeniority';
import { capitalizeFirstLetter } from '../../util/CapitalizeFirstLetter';
import RequirementRoadmapItem from './RequirementRoadmapItem';


interface ProfileSeniorityRoadmapItemProps {
    profileseniority: ProfileSeniority;
}

function ProfileSeniorityRoadmapItem({ profileseniority }: ProfileSeniorityRoadmapItemProps) {
    const { t } = useTranslation();

    const pokemon = profileseniority.getPokemon();
    const seniority = profileseniority.getSeniority();
    const requirements = profileseniority.getRequirements();

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
                            <RequirementRoadmapItem index={index} requirement={requirement} />
                        ))}

                    </div>
                </div>


                <div className='flex flex-col items-center '>
                    <div className="flex items-center justify-center w-48 h-48 my-24  border-4  rounded-full border-blue-700 bg-dark-blue-300">
                       <img className="w-32" src={pokemon?.getSmallImage()} alt={pokemon?.getName()} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProfileSeniorityRoadmapItem;