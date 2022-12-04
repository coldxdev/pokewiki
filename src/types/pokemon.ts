export interface PokemonState {
  pokemon: null | IPokemon;
}

export enum PokemonTypeName {
  NORMAL = "normal",
  FIGHTING = "fighting",
  FLYING = "flying",
  POISON = "poison",
  GROUND = "ground",
  ROCK = "rock",
  BUG = "bug",
  GHOST = "ghost",
  STEEL = "steel",
  FIRE = "fire",
  WATER = "water",
  GRASS = "grass",
  ELECTRIC = "electric",
  PSYCHIC = "psychic",
  ICE = "ice",
  DRAGON = "dragon",
  DARK = "dark",
  FAIRY = "fairy",
  UNKNOWN = "unknown",
  SHADOW = "shadow",
}

export interface IPokemonType {
  name: string;
}

export interface IPokemonStat {
  name:
    | "hp"
    | "attack"
    | "defense"
    | "special-attack"
    | "special-defense"
    | "speed";
  value: number;
}

export interface IPokemonAbility {
  name: string;
  isHidden: boolean;
}

export interface IPokemonMove {
  id: number;
  type: IPokemonType;
  name: string;
  power: number;
  pp: number;
}

export interface IPokemonCard {
  name: string;
  id: number;
  types: IPokemonType[];
  img: string;
}

export interface IPokemon {
  id: number;
  name: string;
  img: string;
  height: number;
  weight: number;
  experience: number;
  types: IPokemonType[];
  stats: IPokemonStat[];
  abilities?: IPokemonAbility[];
  moves: IPokemonMove[];
}

export enum PokemonActionTypes {
  SET_POKEMON = "SET_POKEMON",
}

export interface PokemonSetPokemonAction {
  type: PokemonActionTypes.SET_POKEMON;
  payload: IPokemon;
}

export type PokemonAction = PokemonSetPokemonAction;
