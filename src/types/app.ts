import { IPokemon, IPokemonType } from "./pokemon";

export interface AppState {
  isLoading: boolean;
  pokemons: IPokemon[];
  error: string;
  itemsLimit: number;
  currentPage: number;
  countOfAllPokemons: number;
  activeType: null | string;
  types: IPokemonType[];
}

export enum AppActionTypes {
  SET_LOADING = "SET_LOADING",
  SET_POKEMONS = "SET_POKEMONS",
  SET_ERROR = "SET_ERROR",
  SET_ITEMS_LIMIT = "SET_ITEMS_LIMIT",
  SET_ACTIVE_TYPE = "SET_ACTIVE_TYPE",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_COUNT_OF_ALL_POKEMONS = "SET_COUNT_OF_ALL_POKEMONS",
  SET_TYPES = "SET_TYPES",
}

export enum AppErrorText {
  NOT_FOUND = "Pokemon doesn't found in our api",
  EMPTY_STRING = "You send empty string",
}

interface AppSetLoadingAction {
  type: AppActionTypes.SET_LOADING;
  payload: boolean;
}

interface AppSetPokemonsAction {
  type: AppActionTypes.SET_POKEMONS;
  payload: IPokemon | IPokemon[];
}
interface AppSetErrorAction {
  type: AppActionTypes.SET_ERROR;
  payload: string;
}
interface AppSetItemsLimitAction {
  type: AppActionTypes.SET_ITEMS_LIMIT;
  payload: number;
}

interface AppSetActiveTypeAction {
  type: AppActionTypes.SET_ACTIVE_TYPE;
  payload: string;
}
interface AppSetCountOfAllPokemonsAction {
  type: AppActionTypes.SET_COUNT_OF_ALL_POKEMONS;
  payload: number;
}
interface AppSetCurrentPageAction {
  type: AppActionTypes.SET_CURRENT_PAGE;
  payload: number;
}

interface AppSetTypesAction {
  type: AppActionTypes.SET_TYPES;
  payload: IPokemonType[];
}

export type AppAction =
  | AppSetTypesAction
  | AppSetCurrentPageAction
  | AppSetCountOfAllPokemonsAction
  | AppSetActiveTypeAction
  | AppSetLoadingAction
  | AppSetPokemonsAction
  | AppSetErrorAction
  | AppSetItemsLimitAction;
