import { Developer } from '../../models/Developer';
import { Pokemon } from '../../models/Pokemon';
import { capitalizeFirstLetter } from '../../util/CapitalizeFirstLetter';

interface PokemonCardProps {
    pokemon: Pokemon | null;
    developer?: Developer;
}

function PokemonCard({ pokemon, developer }: PokemonCardProps) {
    const userHasPokemon = developer?.getDeveloperPokemons().some((developerPokemon) => developerPokemon.getPokemon().getId() == pokemon?.getId());
    const backgroundColor = userHasPokemon ? 'from-cyan-700 to-green-600' : 'from-fuchsia-700 to-blue-600';
    
    return (
        <div>
            {pokemon && (
                <div className={"h-full transition ease-in-out hover:scale-105 hover:bg-indigo-500 duration-150 rounded-2xl bg-gradient-to-r p-0.5 shadow-2xl " + backgroundColor}>
                    <div className="h-full transition block rounded-xl hover:bg-gray-800/50 duration-150 bg-gray-800/80 p-2">
                        <div className="text-center">
                            <h3 className="text-sm font-bold text-gray-200">
                                {capitalizeFirstLetter(pokemon.getName())}
                            </h3>
                            <img className="w-full max-w-xs" src={pokemon.getSmallImage()} alt="Pokemon" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PokemonCard;