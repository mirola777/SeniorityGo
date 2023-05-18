import { t } from 'i18next';
import { ProfileSeniority } from '../../../models/ProfileSeniority';
import { capitalizeFirstLetter } from '../../../util/CapitalizeFirstLetter';

interface ProfileSeniorityCardProps {
    profileseniority: ProfileSeniority;
}

function ProfileSeniorityCard({ profileseniority }: ProfileSeniorityCardProps) {
    const pokemon = profileseniority.getPokemon();
    const seniority = profileseniority.getSeniority();

    return (
        <div className='text-center h-full p-1 w-full sm:w-1/3 '>
            <div className="h-full transition ease-in-out hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-0.5 shadow-2xl">
                <div className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4">
                    <strong className="font-medium text-lg text-white">{seniority?.getName() + " (" + t('level') + " " + seniority?.getLevel() + ")"}</strong>
                    <img className="w-full p-4" src={pokemon?.getImage()} alt={pokemon?.getName()} />
                    <p className="text-base text-white">{capitalizeFirstLetter(pokemon ? pokemon.getName() : "")}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileSeniorityCard;