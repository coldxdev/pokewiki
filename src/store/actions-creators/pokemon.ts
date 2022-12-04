import {
  fetchPokemonByNameOrId,
  fetchMoveByNameOrId,
} from "./../../api/pokemonsAPI";
import { setLoading } from "./app";
import { AppDispatch } from "./../index";
import {
  IPokemon,
  PokemonAction,
  PokemonActionTypes,
} from "./../../types/pokemon";
import { MOVES_ON_PAGE } from '../../utils/consts';

export const setPokemon = (payload: IPokemon): PokemonAction => ({
  type: PokemonActionTypes.SET_POKEMON,
  payload,
});

export const getPokemon = (pokemonName: string) => {
  return async (dispatch: AppDispatch): Promise<IPokemon> => {
    dispatch(setLoading(true));
    const pokemon = await fetchPokemonByNameOrId(pokemonName);

    const slicedMoves = pokemon.moves.slice(0, MOVES_ON_PAGE);
    const fetchedMoves = await Promise.all(
      slicedMoves.map((move) => fetchMoveByNameOrId(move.name))
    );

    dispatch(setLoading(false));
    return { ...pokemon, moves: fetchedMoves };
  };
};
