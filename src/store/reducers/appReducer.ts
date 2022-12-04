import { ITEMS_PER_PAGE } from "../../utils/consts";
import { AppState, AppActionTypes, AppAction } from "./../../types/app";

const initialState: AppState = {
  isLoading: true,
  pokemons: [],
  itemsLimit: ITEMS_PER_PAGE,
  currentPage: 1,
  countOfAllPokemons: null,
  activeType: null,
  error: "",
  types: [],
};

export const appReducer = (
  state = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case AppActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case AppActionTypes.SET_POKEMONS:
      return Array.isArray(action.payload)
        ? { ...state, pokemons: action.payload }
        : { ...state, pokemons: [action.payload] };
    case AppActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case AppActionTypes.SET_ITEMS_LIMIT:
      return { ...state, itemsLimit: action.payload };
    case AppActionTypes.SET_ACTIVE_TYPE:
      return { ...state, activeType: action.payload };
    case AppActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case AppActionTypes.SET_COUNT_OF_ALL_POKEMONS:
      return { ...state, countOfAllPokemons: action.payload };
    case AppActionTypes.SET_TYPES:
      return { ...state, types: action.payload };
    default:
      return state;
  }
};
