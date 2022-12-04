import { IPokemon, IPokemonType } from "../types/pokemon";
import axios from "./index";

export interface FetchAllPokemons {
  count: number;
  pokemons: IPokemon[];
}

export const fetchPokemonByNameOrId = async (
  pokemonValue: string | number
): Promise<IPokemon> => {
  try {
    const pokemon = await axios
      .get(`/pokemon/${pokemonValue}`)
      .then(({ data: pokemon }) => {
        const formattedTypes = pokemon.types.map((item) => ({
          name: item.type.name,
        }));
        const formattedStats = pokemon.stats.map((item) => ({
          name: item.stat.name,
          value: item.base_stat,
        }));

        const formattedMoves = pokemon.moves.map((item) => ({
          name: item.move.name,
        }));

        const formattedAbilities = pokemon.abilities.map((item) => ({
          name: item.ability.name,
          isHidden: item.is_hidden,
        }));

        return {
          id: pokemon.id,
          name: pokemon.name,
          img: pokemon.sprites.front_default,
          types: formattedTypes,
          weight: pokemon.weight,
          height: pokemon.height,
          experience: pokemon.base_experience,
          stats: formattedStats,
          abilities: formattedAbilities,
          moves: formattedMoves,
        };
      });

    return pokemon;
  } catch (e) {
    console.log(e);
  }
};

export const fetchMoveByNameOrId = async (moveValue: string | number) => {
  try {
    const move = await axios
      .get(`/move/${moveValue}`)
      .then(({ data: move }) => move);

    return move;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchAllPokemons = async (
  limit = 8
): Promise<FetchAllPokemons> => {
  try {
    const pokemonsData = await axios
      .get(`/pokemon?limit=${limit}`)
      .then(({ data }) => ({ count: data.count, pokemons: data.results }));

    const detailedPokemonsInfo = await Promise.all(
      pokemonsData.pokemons.map((pokemon) =>
        fetchPokemonByNameOrId(pokemon.name)
      )
    );

    return { ...pokemonsData, pokemons: detailedPokemonsInfo };
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchPokemonsByTypeName = async (name): Promise<IPokemon[]> => {
  try {
    const pokemons = await axios
      .get(`/type/${name}`)
      .then(({ data }) => data.pokemon)
      .then((pokemons) =>
        Promise.all(
          pokemons.map((pokemon) =>
            fetchPokemonByNameOrId(pokemon.pokemon.name)
          )
        )
      );

    return pokemons;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchPokemonsTypes = async (): Promise<IPokemonType[]> => {
  try {
    const pokemonsTypes = await axios
      .get(`/type`)
      .then(({ data }) => data.results)
      .then((types) => types.map((type) => ({ name: type.name })));
    return pokemonsTypes;
  } catch (e) {
    throw new Error(e);
  }
};
