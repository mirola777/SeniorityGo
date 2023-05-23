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

    return (
        <div className='p-4'>
            <div className='rounded-lg p-4 lg:p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-4 lg:space-y-8'>
                <h3 className="text-3xl font-extrabold text-white">{t('pokemons')}</h3>
                <div className='grid grid-cols-2 xl:grid-cols-3 gap-2'>
                    {user?.getDeveloperPokemons().map((developerpokemon) => (<PokemonCard pokemon={developerpokemon.getPokemon()} />))}
                </div>
            </div>
        </div>
    );
}

export default UserPokemonsCard;