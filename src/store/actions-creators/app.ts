import {
  fetchAllPokemons,
  fetchPokemonByNameOrId,
  fetchPokemonsByTypeName,
  fetchPokemonsTypes,
} from "../../api/pokemonsAPI";
import { AppDispatch } from "./../";
import { IPokemon, IPokemonType } from "./../../types/pokemon";
import { AppAction, AppActionTypes, AppErrorText } from "./../../types/app";

export const setLoading = (payload: boolean): AppAction => ({
  type: AppActionTypes.SET_LOADING,
  payload,
});

export const setPokemons = (payload: IPokemon[] | IPokemon): AppAction => ({
  type: AppActionTypes.SET_POKEMONS,
  payload,
});

export const setError = (payload): AppAction => ({
  type: AppActionTypes.SET_ERROR,
  payload,
});

export const setItemsLimit = (payload: number): AppAction => ({
  type: AppActionTypes.SET_ITEMS_LIMIT,
  payload,
});

export const setActiveType = (payload: string): AppAction => ({
  type: AppActionTypes.SET_ACTIVE_TYPE,
  payload,
});

export const setCurrentPage = (payload: number): AppAction => ({
  type: AppActionTypes.SET_CURRENT_PAGE,
  payload,
});

export const setCountOfAllPokemons = (payload: number): AppAction => ({
  type: AppActionTypes.SET_COUNT_OF_ALL_POKEMONS,
  payload,
});

export const setTypes = (payload: IPokemonType[]): AppAction => ({
  type: AppActionTypes.SET_TYPES,
  payload,
});

export const getPokemons = (limit: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    const pokemonsData = await fetchAllPokemons(limit);
    dispatch(setLoading(false));
    return pokemonsData;
  };
};

export const getPokemonByNameOrId = (value: string | number) => {
  return async (dispatch: AppDispatch) => {
    const pokemon = await fetchPokemonByNameOrId(value);

    if (pokemon) {
      dispatch(setError(""));
      return pokemon;
    } else {
      dispatch(setError(AppErrorText.NOT_FOUND));
    }
  };
};

export const getPokemonsByTypeName = (typeName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    const pokemons = await fetchPokemonsByTypeName(typeName);
    dispatch(setLoading(false));
    if (pokemons) {
      return pokemons;
    }
  };
};

export const getPokemonsTypes = () => {
  return async (dispatch: AppDispatch): Promise<IPokemonType[]> => {
    dispatch(setLoading(true));
    const types = await fetchPokemonsTypes();
    dispatch(setLoading(false));
    if (types) {
      return types.filter((type: IPokemonType) =>
        type.name === "unknown" || type.name === "shadow" ? false : true
      );
    }
  };
};

