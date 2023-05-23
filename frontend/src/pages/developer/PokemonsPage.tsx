import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import OrganizationCard from '../../components/common/OrganizationCard';
import LoadingScreen from '../../components/common/LoadingScreen';
import { getAllPokemons } from '../../services/PokemonService';
import { Pokemon } from '../../models/Pokemon';
import PokemonCard from '../../components/common/PokemonCard';
import { Admin } from '../../models/Admin';
import { Developer } from '../../models/Developer';
import { getUserSession } from '../../services/AuthService';

function PokemonsPage() {
    // Translation component
    const { t } = useTranslation();

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<Admin | Developer | null>(null);

    useEffect(() => {
        getUserSession().then((user) => {
            setUser(user);
        });

        getAllPokemons().then((pokemonsResponse) => {
            setPokemons(pokemonsResponse);
            setLoading(false);
        });
    }, [setPokemons]);

    return (
        <div className='p-4 lg:p-8 mx-auto max-w-screen-2xl w-full overflow-y-auto scrollbar-none'>
            <div className='rounded-lg p-4 lg:p-8 bg-gradient-to-r from-gray-800 to-dark-blue-800 shadow-2xl space-y-4 lg:space-y-8'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-2xl lg:text-5xl font-extrabold text-white">{t('pokemons')}</h2>
                </div>

                <hr className="h-px my-8 border-0 bg-gray-700" />

                <ul className="grid grid-cols-3 lg:grid-cols-6  gap-2 lg:gap-4">
                    {!loading ? (pokemons.map((pokemon) =>
                        <li>
                            <PokemonCard pokemon={pokemon} developer={user instanceof Developer ? user : undefined}></PokemonCard>
                        </li>
                    )) : (<LoadingScreen />)}
                </ul>
            </div>
        </div>
    );
}

export default PokemonsPage;