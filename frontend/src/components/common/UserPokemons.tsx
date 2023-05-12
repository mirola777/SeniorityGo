import { useTranslation } from 'react-i18next';
import { Developer } from '../../models/Developer';
import { Pokemon } from '../../models/Pokemon';
import PokemonCard from './PokemonCard';


interface UserPokemonsCardProps {
    user: Developer | null;
}


function UserPokemonsCard({ user }: UserPokemonsCardProps) {
    // Translation component
    const { t } = useTranslation();

    const pokemons: Pokemon[] = [];

    user?.getDeveloperProfiles().map((developerProfile) => {
        developerProfile.getProfile().getProfilesSeniorities().map((profileseniority) => {
            const pokemon = profileseniority.getPokemon();
            if (pokemon instanceof Pokemon) {
                pokemons.push(pokemon);
            }

            return null;
        });
        return null;
    });

    return (
        <div className='p-4'>
            <div className='rounded-lg p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-8'>
                <h3 className="text-3xl font-extrabold text-white">{t('pokemons')}</h3>
                <div className='grid grid-cols-3 gap-2'>
                    {pokemons.map((pokemon) => (<PokemonCard pokemon={pokemon} />))}
                </div>
            </div>
        </div>
    );
}

export default UserPokemonsCard;