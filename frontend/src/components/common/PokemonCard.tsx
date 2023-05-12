import { Pokemon } from '../../models/Pokemon';
import { capitalizeFirstLetter } from '../../util/CapitalizeFirstLetter';

interface PokemonCardProps {
    pokemon: Pokemon | null;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div>
            {pokemon && (
                <div className="h-full transition ease-in-out hover:scale-105 hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r from-fuchsia-700 to-blue-600 p-1 shadow-2xl">
                    <div className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-4">
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-gray-200">
                                {capitalizeFirstLetter(pokemon.getName())}
                            </h3>
                            <img className="w-full max-w-xs" src={pokemon.getImage()} alt="Pokemon" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PokemonCard;