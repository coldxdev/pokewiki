import { PokemonState, PokemonActionTypes, PokemonAction } from './../../types/pokemon';

const initialState: PokemonState = {
  pokemon: null,
};

export const pokemonReducer = (state = initialState, action: PokemonAction): PokemonState  => {
  switch (action.type) {

    case PokemonActionTypes.SET_POKEMON:
      return {...state, pokemon: action.payload}

    default:
      return state;
  }
};
