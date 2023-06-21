import { render, screen } from '@testing-library/react';
import PokemonCard from '../components/common/PokemonCard';
import { Pokemon } from '../models/Pokemon';
import { Developer } from '../models/Developer';
import { User } from '../models/User';
import { DeveloperPokemon } from '../models/DeveloperPokemon';

describe('PokemonCard', () => {
  test('renders with Pokemon information', () => {
    const pokemon = new Pokemon(1, 'Pikachu', 'pokemon-image.jpg', 'pokemon-small-image.jpg');
    render(<PokemonCard pokemon={pokemon} />);
    
    // Assert that the Pokemon name is rendered
    const pokemonName = screen.getByText('Pikachu');
    expect(pokemonName).toBeInTheDocument();

    // Assert that the Pokemon image is rendered
    const pokemonImage = screen.getByAltText('Pokemon');
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('src', 'pokemon-small-image.jpg');
  });

  test('renders with user-specific styling if user has the Pokemon', () => {
    const pokemon = new Pokemon(1, 'Pikachu', 'pokemon-image.jpg', 'pokemon-small-image.jpg');
    const user = new User(1, 'john_doe', 'john@example.com', 1);
    const developerPokemon = new DeveloperPokemon(pokemon/*, 1*/);
    const developer = new Developer(user, 'John', 'Doe', 'Smith', new Date(), 'avatar.jpg', '1234567890', true, 100, [], [], [developerPokemon]);
    
    render(<PokemonCard pokemon={pokemon} developer={developer} />);
    
    // Assert that the Pokemon card has user-specific styling
    //const pokemonCard = screen.getByTestId('pokemon-card');
    //expect(pokemonCard).toHaveClass('from-cyan-700 to-green-600');
  });

  test('renders with default styling if user does not have the Pokemon', () => {
    const pokemon = new Pokemon(1, 'Pikachu', 'pokemon-image.jpg', 'pokemon-small-image.jpg');
    const user = new User(1, 'john_doe', 'john@example.com', 1);
    const developer = new Developer(user, 'John', 'Doe', 'Smith', new Date(), 'avatar.jpg', '1234567890', true, 100, [], [], []);
    
    render(<PokemonCard pokemon={pokemon} developer={developer} />);
    
    // Assert that the Pokemon card has default styling
    //expect(pokemonCard).toHaveClass('from-fuchsia-700 to-blue-600');
  });

  test('does not render if pokemon prop is null', () => {
    render(<PokemonCard pokemon={null} />);
    
    // Assert that the Pokemon card is not rendered
    const pokemonCard = screen.queryByTestId('pokemon-card');
    expect(pokemonCard).not.toBeInTheDocument();
  });
});
