import { t } from 'i18next';
import { Profile } from '../../models/Profile';
import PokemonCard from './PokemonCard';
import ProfileSeniorityCard from './ProfileSeniorityCard';

interface ProfileDetailedCardProps {
    profile: Profile;
}

function ProfileDetailedCard({ profile }: ProfileDetailedCardProps) {
    return (
        <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800  shadow-2xl'>
            <div className="container mx-auto">
                <section className="text-center text-white w-full">
                    <h2 className="text-4xl font-bold mb-2">
                        {profile.getName()}
                    </h2>

                    <p className="text-gray-400 mb-12">
                        {profile.getDescription()}
                    </p>
                    <div className="flex flex-wrap items-center">


                        <div className="grow-0 shrink-0 basis-auto w-full  mb-6 mb-md-0 px-3">
                            <div className="flex flex-col w-full space-y-2 ">
                                {profile.getProfilesSeniorities().map((profileseniority) => {
                                    return  (<ProfileSeniorityCard profileseniority={profileseniority} />);
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full text-white space-y-4">
                    <h3 className="text-xl font-extrabol">{t('profile_pokemons')}</h3>
                    <div className="flex items-center space-x-4">
                        {profile.getProfilesSeniorities().map((profileseniority) => {
                            return <PokemonCard pokemon={profileseniority.getPokemon()} />
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProfileDetailedCard;